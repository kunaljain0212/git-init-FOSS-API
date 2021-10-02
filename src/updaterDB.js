import fetch from "node-fetch";
import fs from "fs";

const projects = [
  { maintainer: "hs2361", project: "horario" },
  { maintainer: "hs2361", project: "k-means-compressor" },
  { maintainer: "DebadityaPal", project: "PlagiarismChecker" },
  { maintainer: "4molybdenum2", project: "DSA" },
  { maintainer: "manishprivet", project: "dynamic-gnome-wallpapers" },
  { maintainer: "manishprivet", project: "electify" },
  { maintainer: "Namanl2001", project: "MERN-Gurujii-dev" },
  { maintainer: "manikmmalhotra", project: "generator-android-minks" },
  { maintainer: "kunaljain0212", project: "Apni-Dukan-Backend" },
  { maintainer: "aaryak-shah", project: "git-init-FOSS" },
  { maintainer: "nafees87n", project: "codebox" },
  { maintainer: "manikmmalhotra", project: "Noddy" },
  { maintainer: "TheNinza", project: "vaccimailer" },
  { maintainer: "TheNinza", project: "dsa-visualizer" },
  { maintainer: "TheNinza", project: "vc-room" },
  { maintainer: "nishidhaSri", project: "spacestagram" },
  { maintainer: "nishidhaSri", project: "gsearch" },
  { maintainer: "hitenSharm", project: "Discord-Meme-Bot" },
  { maintainer: "secrashi", project: "Pathfinder-Visualiser" },
  { maintainer: "Swarnim01", project: "Movie_Listing_Webapp" },
  { maintainer: "secrashi", project: "Connect-Intellect" },
  { maintainer: "AASF-IIITM", project: "aasf-website-backend" },
];

let students = {
  mounicasruthi: {
    name: "Mounica Sruthi K",
    rollNumber: "2020IMT-061",
    score: 0,
  },
  "neetu-749": {
    name: "Neetu Kumari",
    rollNumber: "2020BCS-052",
    score: 0,
  },
  diwakarsing: {
    name: "DIWAKAR SINGH YADAV",
    rollNumber: "2020BCS027",
    score: 0,
  },
  AdityaPandey03: {
    name: "Aditya Pandey",
    rollNumber: "2020IMG-005",
    score: 0,
  },
  shreshthgoyal: {
    name: "Shreshth Goyal",
    rollNumber: "2020IMT-094",
    score: 0,
  },
  akashgupta1909: {
    name: "Akash Gupta",
    rollNumber: "2020IMT-005",
    score: 0,
  },
  "sahil-mittal": {
    name: "Sahil Mittal",
    rollNumber: "2020IMG-054",
    score: 0,
  },
  anshrusia200: {
    name: "Ansh Rusia",
    rollNumber: "2020IMT-012",
    score: 0,
  },
  "gurpreet-legend": {
    name: "Gurpreet Singh",
    rollNumber: "2020BCS-036",
    score: 0,
  },
  kailash360: {
    name: "Kailash Kejriwal",
    rollNumber: "2020BCS-044",
    score: 0,
  },
  markvrma: {
    name: "Mark Verma",
    rollNumber: "2020BCS-078",
    score: 0,
  },
  vishwas031: {
    name: "Vishwas Singh",
    rollNumber: "2020BCS-074",
    score: 0,
  },
  AmanPachori: {
    name: "Aman Pachori",
    rollNumber: "2020IMG-007",
    score: 0,
  },
  "A-K-2001": {
    name: "Anil Kumar",
    rollNumber: "2020BCS-011",
    score: 0,
  },
  XDRAGON2002: {
    name: "Anant Vijay",
    rollNumber: "2020BCS-010",
    score: 0,
  },
  sohan2410: {
    name: "Sohan Bandary",
    rollNumber: "2020IMG-016",
    score: 0,
  },
  ketanprakash: {
    name: "Ketan Prakash",
    rollNumber: "2020IMT-044",
    score: 0,
  },
  Sanket2055: {
    name: "Sanket Santosh Diwate",
    rollNumber: "2020IMT-031",
    score: 0,
  },
  lanslord11: {
    name: "Piyush Yadav",
    rollNumber: "2020IMT-068",
    score: 0,
  },
  UjjawalGupta30: {
    name: "Ujjawal Gupta",
    rollNumber: "2020IMT-107",
    score: 0,
  },
  RajVarsani: {
    name: "Raj Varsani",
    rollNumber: "2020IMT-111",
    score: 0,
  },
  HarshilMendpara: {
    name: "Harshil Mendpara",
    rollNumber: "2020IMT-056",
    score: 0,
  },
  anoopkammari: {
    name: "Anoop Kammari",
    rollNumber: "2020BCS-045",
    score: 0,
  },
  HimshikharSingh: {
    name: "Himshikhar Singh",
    rollNumber: "2020IMT-039",
    score: 0,
  },
  CyberMrinal: {
    name: "Mrinal Devnath",
    rollNumber: "2020IMT-062",
    score: 0,
  },
  Smr0303: {
    name: "Samarjeet Mohite",
    rollNumber: "2020-IMT-084",
    score: 0,
  },
  deepanshu2810: {
    name: "Deepanshu jain",
    rollNumber: "2020BCS-025",
    score: 0,
  },
  addy0110: {
    name: "Adarsh Pandey",
    rollNumber: "2020IMT-004",
    score: 0,
  },
  "pari-hash": {
    name: "Paridhi Singhal",
    rollNumber: "2020BCS-055",
    score: 0,
  },
  Harsh9425: {
    name: "Harsh Mishra",
    rollNumber: "2020IMT-036",
    score: 0,
  },
  ShivraniAJ: {
    name: "Shivrani Appaso Jadhav",
    rollNumber: "2020IMT-093",
    score: 0,
  },
  Ayushrusiya47: {
    name: "Ayush Rusiya",
    rollNumber: "20202IMT-020",
    score: 0,
  },
  Aayush63777: {
    name: "Aayush kumar",
    rollNumber: "2020BCS-002",
    score: 0,
  },
  "Arun-Kumar-Rathod": {
    name: "Arun Kumar Rathod",
    rollNumber: "2020BCS-014",
    score: 0,
  },
  anshkush92college: {
    name: "Ansh Singh",
    rollNumber: "2020IMT-013",
    score: 0,
  },
  swahim: {
    name: "Swahim Namdev",
    rollNumber: "2020IMG-063",
    score: 0,
  },
  seko101: {
    name: "SIDDHARTH SINGH",
    rollNumber: "2020IMT-100",
    score: 0,
  },
  "22chiragmodh": {
    name: "MODH CHIRAGKUMAR",
    rollNumber: "2020IMT-058",
    score: 0,
  },
  saturnbored: {
    name: "Shivam Ruhil",
    rollNumber: "2020BCS-068",
    score: 0,
  },
  harshgupta1249: {
    name: "Harsh Gupta",
    rollNumber: "2020IMT-035",
    score: 0,
  },
  SaahilSabu: {
    name: "Saahil Sabu Hameed",
    rollNumber: "2020bcs-079",
    score: 0,
  },
  gaurav879: {
    name: "Gaurav Sukhramani",
    rollNumber: "2020BCS-033",
    score: 0,
  },
  "shadab-malik": {
    name: "Shadab Malik",
    rollNumber: "2020IMG-057",
    score: 0,
  },
  GireesheePendela: {
    name: "Gireeshee Pendela",
    rollNumber: "2020BCS-053",
    score: 0,
  },
  "ritik-reaper": {
    name: "RItik Kumar",
    rollNumber: "2020IMT-080",
    score: 0,
  },
  ranjithjupaka: {
    name: "Jupaka ranjith",
    rollNumber: "2020IMT042",
    score: 0,
  },
  saicharith2012: {
    name: "Sai Charith Palabindhela",
    rollNumber: "2020BCS-054",
    score: 0,
  },
  viveksingh1312: {
    name: "Vivek Singh",
    rollNumber: "2020IMT-116",
    score: 0,
  },
  AshishSingh13s: {
    name: "Ashish Singh",
    rollNumber: "2020BCS-016",
    score: 0,
  },
  adarsharyan002: {
    name: "Adarsh Aryan",
    rollNumber: "2020-IMG-003",
    score: 0,
  },
  "ishika-1205": {
    name: "Ishika Chauhan",
    rollNumber: "2020IMT-041",
    score: 0,
  },
  anamika1804: {
    name: "Anamika Mallick",
    rollNumber: "2020bcs-075",
    score: 0,
  },
  "Vidhu-dev": {
    name: "VIDHU PRAKASH",
    rollNumber: "2020IMT-115",
    score: 0,
  },
  alienonearth: {
    name: "Lovish Dak",
    rollNumber: "2020IMT-050",
    score: 0,
  },
  Lakshya9775g: {
    name: "Lakshya Gupta",
    rollNumber: "2020BCS-049",
    score: 0,
  },
  iampkumar02: {
    name: "Prashant Kumar",
    rollNumber: "2020IMG-050",
    score: 0,
  },
  coder284: {
    name: "Devansh Agarwal",
    rollNumber: "2020IMG-020",
    score: 0,
  },
  ChidhvilasTanay: {
    name: "M Chidhvilas Tanay",
    rollNumber: "2020IMT-060",
    score: 0,
  },
  SamarthGarg09: {
    name: "Samarth Garg",
    rollNumber: "2020IMT-085",
    score: 0,
  },
  thebeast1819: {
    name: "Aman Vaishya",
    rollNumber: "2020IMG-008",
    score: 0,
  },
  "arun-kushwaha04": {
    name: "Arun Singh Kushwaha",
    rollNumber: "2020IMT-016",
    score: 0,
  },
  "UNA-ONE": {
    name: "ADITYA RAJ",
    rollNumber: "2020IMG-006",
    score: 0,
  },
  kushmodh: {
    name: "MODH KUSH",
    rollNumber: "2020IMT-059",
    score: 0,
  },
  HrushiBorhade: {
    name: "Hrushikesh Borhade",
    rollNumber: "2020BCS022",
    score: 0,
  },
  pika918: {
    name: "Pragya Rathore",
    rollNumber: "2020IMG-049",
    score: 0,
  },
  Rithvik0701: {
    name: "Rithvik Dave",
    rollNumber: "2020IMT-079",
    score: 0,
  },
  rish78: {
    name: "Rishabh Kumar",
    rollNumber: "2020IMT-078",
    score: 0,
  },
  adityahada: {
    name: "Aditya Singh Hada",
    rollNumber: "2020BCS-006",
    score: 0,
  },
  Rexbeast2: {
    name: "Sukhveer Singh",
    rollNumber: "2020BCS-071",
    score: 0,
  },
  Niru8449: {
    name: "Nirupama Singh",
    rollNumber: "2020-IMG-045",
    score: 0,
  },
  "Padi-Rishitha": {
    name: "Rishitha",
    rollNumber: "2020-IMG-047",
    score: 0,
  },
  HVAIDH5: {
    name: "HARSH VAIDH",
    rollNumber: "2020IMG-025",
    score: 0,
  },
  ayannafees: {
    name: "Ayan Nafees",
    rollNumber: "2020IMG-014",
    score: 0,
  },
  ks20soni: {
    name: "Khushi Soni",
    rollNumber: "2020IMT-045",
    score: 0,
  },
  deadmanbmk6: {
    name: "Devanshu Patidar",
    rollNumber: "2020IMT-026",
    score: 0,
  },
  "kshitij-404": {
    name: "Kshitij Ayush",
    rollNumber: "2020IMT-047",
    score: 0,
  },
  aniket1251: {
    name: "Aniket Gautam",
    rollNumber: "2020IMT-010",
    score: 0,
  },
  disha9112: {
    name: "Disha Singh",
    rollNumber: "2020IMT-030",
    score: 0,
  },
  chsahithi3812: {
    name: "CH SAHITHI",
    rollNumber: "2020-BCS-023",
    score: 0,
  },
  arushi2715: {
    name: "Arushi Agrawal",
    rollNumber: "2020IMT-017",
    score: 0,
  },
  AkshithGandla: {
    name: "Gandla Akshith",
    rollNumber: "2020BCS-030",
    score: 0,
  },
  tejasri415: {
    name: "Tejasri",
    rollNumber: "2020BCS-029",
    score: 0,
  },
  "KunalPatil-24": {
    name: "Kunal Patil",
    rollNumber: "2020IMT-067",
    score: 0,
  },
  pratul20: {
    name: "Pratul Sharma",
    rollNumber: "2020BCS-061",
    score: 0,
  },
  suyashvsingh: {
    name: "Suyash Vikram Singh",
    rollNumber: "2020IMT-104",
    score: 0,
  },
  Manoramsharma: {
    name: "Manoram Sharma",
    rollNumber: "2020IMG-037",
    score: 0,
  },
  AbhishekSharma75: {
    name: "Abhishek Sharma",
    rollNumber: "2020IMT-003",
    score: 0,
  },
  shahlaukik: {
    name: "Laukik Shah",
    rollNumber: "2020BCS-050",
    score: 0,
  },
  shikhar13012001: {
    name: "Shikhar Gupta",
    rollNumber: "2020IMT-090",
    score: 0,
  },
  "Ayush-019": {
    name: "Ayush Garg",
    rollNumber: "2020IMT-019",
    score: 0,
  },
  saichidvi: {
    name: "Charagondla Saichidvi",
    rollNumber: "2020IMT-023",
    score: 0,
  },
  sadityakumar9211: {
    name: "Aditya Kumar Singh",
    rollNumber: "2020BCS-004",
    score: 0,
  },
  shanmai20: {
    name: "Thota Shanmai",
    rollNumber: "2020BCS072",
    score: 0,
  },
  hshrivastav: {
    name: "Himanshu Shrivastava",
    rollNumber: "2020IMG-028",
    score: 0,
  },
  impriyanshuin: {
    name: "Priyanshu",
    rollNumber: "2020IMT-076",
    score: 0,
  },
  PkSinha7: {
    name: "Prakhar Kumar Sinha",
    rollNumber: "2020IMT-070",
    score: 0,
  },
  "Syd-B": {
    name: "Siddharth Butoliya",
    rollNumber: "2020IMG-061",
    score: 0,
  },
  SatyaS18: {
    name: "Satyakant Sahu",
    rollNumber: "2020IMT-088",
    score: 0,
  },
  mayanksingh038: {
    name: "Mayank Singh",
    rollNumber: "2020IMG-038",
    score: 0,
  },
  ChoutapallyAkshara: {
    name: "Choutapally Akshara",
    rollNumber: "2020IMT-024",
    score: 0,
  },
  Firestorm2602: {
    name: "Siddhant Salve",
    rollNumber: "2020IMT-099",
    score: 0,
  },
  shambhu1212: {
    name: "Shambhavi Singh",
    rollNumber: "2020IMG-058",
    score: 0,
  },
  Hachimitsu25: {
    name: "Devesu Sundram Dev",
    rollNumber: "2020IMT-027",
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
      if (data[i].labels.length === 0) {
        score[student].score += 10;
      } else {
        for (const label of data[i].labels) {
          if (label.name.toLowerCase() === "easy") {
            score[student].score += 10;
            break;
          } else if (
            label.name.toLowerCase() === "medium" ||
            label.name.toLowerCase() === "intermediate"
          ) {
            score[student].score += 20;
            break;
          } else if (label.name.toLowerCase() === "hard") {
            score[student].score += 30;
            break;
          } else {
            score[student].score += 10;
            break;
          }
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
  fs.writeFile("./src/score.json", JSON.stringify(score, null, 2), (err) => {
    if (err) {
      console.log(err);
    }
  });
  score = {};
};

main();
