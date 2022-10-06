import fs from "fs";

import students from "../public/students";

const data = {};
students.map(student => {
  data[student["GitHub username"]] = {
    name: student["Name"],
    rollNumber: student["Roll number (eg. 2021IMT-XXX)"],
    score: 0,
  };
});

fs.writeFileSync("students.json", JSON.stringify(data, null, 2));
