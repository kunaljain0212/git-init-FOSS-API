import fs from "fs";

import students from "../public/students.js";

const data = {};

students.map(student => {
  data[student["GitHub username"]] = {
			name: student["Name"],
			rollNumber: student["Roll number (eg. 2021IMT-XXX)"],
			score: 0,
			easy: 0,
			medium: 0,
			hard: 0
		
  };
});
const str='export default '+ JSON.stringify(data)
fs.writeFileSync("../public/studentScoreCard.js", str);
