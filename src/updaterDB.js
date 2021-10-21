import fetch from "node-fetch";
import fs from "fs";

import projects from "../public/projects.js";
import students from "../public/studentScoreCard.js";

const pr= {
    TotalPR:0,
    NumberHard:0,
    NumberEasy:0,
    NumberMedium:0,
    NumberOfActiveContributors:0,
  }

let score = {};

const contributors = async ()=> {
  
    fs.readFile("../public/score.json", function read(err, data) {
    if (err) {
        throw err;
    }
     let values= JSON.parse(data); 
  for (const key of Object.values(values)) {
    if (key.score>0)
     {
      pr.NumberOfActiveContributors++;
      if(key.hard>0)
      {
        pr.NumberHard+=key.hard;
      }
      if(key.medium>0)
      { 
        pr.NumberMedium+=key.medium; 
      }
      if(key.easy>0)
      { 
        pr.NumberEasy+=key.easy; 
      }
      pr.TotalPR+=key.hard+key.medium+key.easy;
     } 
  }  
  fs.writeFile("./stats.json", JSON.stringify(pr, null, 2), (err) => {
    if (err) {
      console.log(err);
    }
});
});
};

const getProjects = async projectDetails => {
  const response = await fetch(
    `https://api.github.com/repos/${projectDetails.maintainer}/${projectDetails.project}/pulls?state=closed`
  );
  score = students;
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const student = data[i].user.login;
    if (
      student in students &&
      data[i].merged_at !== null &&
      new Date(data[i].merged_at) >= new Date("2021-10-01T00:00:00Z") &&
      new Date(data[i].merged_at) <= new Date("2021-10-31T23:59:59Z")
    ) {
      if (data[i].labels.length === 0) {
        score[student].score += 10;
        score[student].easy++;
      } else {
        let isMedium = false;
        let isHard = false;
        for (const label of data[i].labels) {
          if (
            label.name.toLowerCase() === "medium" ||
            label.name.toLowerCase() === "intermediate"
          ) {
            isMedium = true;
          } else if (label.name.toLowerCase() === "hard") {
            isHard = true;
          }
        }
        if (isHard) {
          score[student].score += 30;
          score[student].hard++;
        } else if (isMedium) {
          score[student].score += 20;
          score[student].medium++;
        } else {
          score[student].score += 10;
          score[student].easy++;
        }
      }
    }
  }
  return score;
};

const main = async () => {
  for (let i = 0; i < projects.length; i++) {
    await getProjects(projects[i]);
  }
  fs.writeFile("../public/score.json", JSON.stringify(score, null, 2), err => {
    if (err) {
      console.log(err);
    }
  });
  score = {};
};



main();
contributors();
