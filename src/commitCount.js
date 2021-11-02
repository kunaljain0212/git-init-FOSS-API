import commitsArray from '../public/commitsUrl.js';
import fetch from "node-fetch";

let commitCount = 0;

const getCommitCount = async commitsArray => {
  for (let index = 0; index < 5; index++) {
    const element = commitsArray[index];
    const response = await fetch(element);
    const data = await response.json();
    commitCount += data.length;
  }
};

const main = async () => {
  await getCommitCount(commitsArray);
  console.log(commitCount);
};
main();
