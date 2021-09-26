import fetch from "node-fetch";
import fs from "fs";
import { scheduleJob } from "node-schedule";

const projects = [
  { maintainer: "AASF-IIITM", project: "aasf-website-backend" },
];
const students = ["kunaljain0212", "tend2infinity", "hs2361", "manishprivet"];
let score = {};

const getProjects = async (projectDetails) => {
  const response = await fetch(
    `https://api.github.com/repos/${projectDetails.maintainer}/${projectDetails.project}/pulls?state=closed`
  );
  const data = await response.json();
  for (let i = 0; i < data.length; i++) {
    const student = data[i].user.login;
    if (students.includes(student) && data[i].merged_at !== null) {
      if (score[student] !== undefined) {
        score[student]++;
      } else {
        score[student] = 1;
      }
    }
  }
};

const main = async () => {
  for (let i = 0; i < projects.length; i++) {
    await getProjects(projects[i]);
  }
  fs.writeFile("./src/score.json", JSON.stringify(score, null, 2), (err) => {
    if (err) {
      console.log(err);
    }
  });
  score = {};
};

main();

const job = scheduleJob("update", "*/1 * * * *", main);
