import fetch from "node-fetch";
import fs from "fs";
import { scheduleJob } from "node-schedule";

const projects = [
  { maintainer: "hs2361", project: "horario" },
  { maintainer: "hs2361", project: "k-means-compressor" },
  { maintainer: "DebadityaPal", project: "PlagiarismChecker" },
  { maintainer: "4molybdenum2", project: "DSA" },
  { maintainer: "manishprivet", project: "dynamic-gnome-wallpapers" },
  { maintainer: "manishprivet", project: "electify" },
  { maintainer: "Namanl2001", project: "MERN-Gurujii-dev" },
  { maintainer: "manikmmalhotra", project: "generator-android-minks" },
  { maintainer: "29ravikant-akash", project: "horario" },
];
const students = {
  kunaljain0212: {
    name: "Kunal",
    rollNumber: "2019IMT052",
    score: 0,
  },
};
let score = {};

const getProjects = async (projectDetails) => {
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
      score[student].score += 10;
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
