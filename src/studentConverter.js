import fs from "fs";

import students from "../public/students";

const data = {};

students.map(student => {
  data[student["GitHub username"]] = {
			name: student["Name"],
			rollNumber: student["Roll number (eg. 2020IMT-XXX)"],
			score: 0,
			easy: 0,
			medium: 0,
			hard: 0
		
  };
});

fs.writeFileSync("public/studentScoreCard.js", JSON.stringify(data, null, 2));
