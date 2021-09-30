import fs from 'fs';

const students = [
    {
        Name: "Mounica Sruthi K",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-061",
        "GitHub username": "mounicasruthi",
    },
    {
        Name: "Neetu Kumari",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-052",
        "GitHub username": "neetu-749",
    },
    {
        Name: "DIWAKAR SINGH YADAV",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS027",
        "GitHub username": "Living_Cave",
    },
    {
        Name: "Aditya Pandey",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-005",
        "GitHub username": "AdityaPandey03",
    },
    {
        Name: "Shreshth Goyal",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-094",
        "GitHub username": "shreshthgoyal",
    },
    {
        Name: "Akash Gupta",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-005",
        "GitHub username": "akashgupta1909",
    },
    {
        Name: "Sahil Mittal",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-054",
        "GitHub username": "sahil-mittal",
    },
    {
        Name: "Ansh Rusia",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-012",
        "GitHub username": "anshrusia200",
    },
    {
        Name: "Gurpreet Singh",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-036",
        "GitHub username": "gurpreet-legend",
    },
    {
        Name: "Kailash Kejriwal",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-044",
        "GitHub username": "kailash360",
    },
    {
        Name: "Mark Verma",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-078",
        "GitHub username": "markvrma",
    },
    {
        Name: "Vishwas Singh",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-074",
        "GitHub username": "vishwas031",
    },
    {
        Name: "Aman Pachori",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-007",
        "GitHub username": "AmanPachori",
    },
    {
        Name: "Anil Kumar",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-011",
        "GitHub username": "A-K-2001",
    },
    {
        Name: "Anant Vijay",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-010",
        "GitHub username": "XDRAGON2002",
    },
    {
        Name: "Sohan Bandary",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-016",
        "GitHub username": "sohan2410",
    },
    {
        Name: "Ketan Prakash",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-044",
        "GitHub username": "ketanprakash",
    },
    {
        Name: "Sanket Santosh Diwate",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-031",
        "GitHub username": "Sanket2055",
    },
    {
        Name: "Piyush Yadav",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-068",
        "GitHub username": "lanslord11",
    },
    {
        Name: "Ujjawal Gupta",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-107",
        "GitHub username": "UjjawalGupta30",
    },
    {
        Name: "Raj Varsani",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-111",
        "GitHub username": "RajVarsani",
    },
    {
        Name: "Harshil Mendpara",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-056",
        "GitHub username": "HarshilMendpara",
    },
    {
        Name: "Anoop Kammari",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-045",
        "GitHub username": "anoopkammari",
    },
    {
        Name: "Himshikhar Singh",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-039",
        "GitHub username": "HimshikharSingh",
    },
    {
        Name: "Mrinal Devnath",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-062",
        "GitHub username": "CyberMrinal",
    },
    {
        Name: "Samarjeet Mohite",
        "Roll number (eg. 2020IMT-XXX)": "2020-IMT-084",
        "GitHub username": "Smr0303",
    },
    {
        Name: "Deepanshu jain",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-025",
        "GitHub username": "deepanshu2810",
    },
    {
        Name: "Adarsh Pandey",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-004",
        "GitHub username": "addy0110",
    },
    {
        Name: "Paridhi Singhal",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-055",
        "GitHub username": "pari-hash",
    },
    {
        Name: "Harsh Mishra",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-036",
        "GitHub username": "Harsh9425",
    },
    {
        Name: "Shivrani Appaso Jadhav",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-093",
        "GitHub username": "ShivraniAJ",
    },
    {
        Name: "Ayush Rusiya",
        "Roll number (eg. 2020IMT-XXX)": "20202IMT-020",
        "GitHub username": "Ayushrusiya47",
    },
    {
        Name: "Aayush kumar",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-002",
        "GitHub username": "Aayush63777",
    },
    {
        Name: "Arun Kumar Rathod",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-014",
        "GitHub username": "Arun-Kumar-Rathod",
    },
    {
        Name: "Ansh Singh",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-013",
        "GitHub username": "anshkush92college",
    },
    {
        Name: "Shashwat Gupta",
        "Roll number (eg. 2020IMT-XXX)": "2019IMT-093",
        "GitHub username": "shashwat0105",
    },
    {
        Name: "Swahim Namdev",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-063",
        "GitHub username": "swahim",
    },
    {
        Name: "SIDDHARTH SINGH",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-100",
        "GitHub username": "seko101",
    },
    {
        Name: "MODH CHIRAGKUMAR",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-058",
        "GitHub username": "22chiragmodh",
    },
    {
        Name: "Shivam Ruhil",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-068",
        "GitHub username": "saturnbored",
    },
    {
        Name: "Harsh Gupta",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-035",
        "GitHub username": "harshgupta1249",
    },
    {
        Name: "Kartikey Vaish",
        "Roll number (eg. 2020IMT-XXX)": "2019BCS-078",
        "GitHub username": "kartikeyvaish",
    },
    {
        Name: "Saahil Sabu Hameed",
        "Roll number (eg. 2020IMT-XXX)": "2020bcs-079",
        "GitHub username": "SaahilSabu",
    },
    {
        Name: "Gaurav Sukhramani",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-033",
        "GitHub username": "gaurav879",
    },
    {
        Name: "Shadab Malik",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-057",
        "GitHub username": "shadab-malik",
    },
    {
        Name: "Gireeshee Pendela",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-053",
        "GitHub username": "GireesheePendela",
    },
    {
        Name: "RItik Kumar",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-080",
        "GitHub username": "ritik-reaper",
    },
    {
        Name: "Jupaka ranjith",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT042",
        "GitHub username": "ranjithjupaka",
    },
    {
        Name: "Sai Charith Palabindhela",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-054",
        "GitHub username": "saicharith2012",
    },
    {
        Name: "Vivek Singh",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-116",
        "GitHub username": "viveksingh1312",
    },
    {
        Name: "Ashish Singh",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-016",
        "GitHub username": "AshishSingh13s",
    },
    {
        Name: "Adarsh Aryan",
        "Roll number (eg. 2020IMT-XXX)": "2020-IMG-003",
        "GitHub username": "adarsharyan002",
    },
    {
        Name: "Ishika Chauhan",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-041",
        "GitHub username": "ishika-1205",
    },
    {
        Name: "Anamika Mallick",
        "Roll number (eg. 2020IMT-XXX)": "2020bcs-075",
        "GitHub username": "anamika1804",
    },
    {
        Name: "VIDHU PRAKASH",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-115",
        "GitHub username": "Vidhu-dev",
    },
    {
        Name: "Lovish Dak",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-050",
        "GitHub username": "alienonearth",
    },
    {
        Name: "Lakshya Gupta",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-049",
        "GitHub username": "Lakshya9775g",
    },
    {
        Name: "Prashant Kumar",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-050",
        "GitHub username": "iampkumar02",
    },
    {
        Name: "Devansh Agarwal",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-020",
        "GitHub username": "coder284",
    },
    {
        Name: "M Chidhvilas Tanay",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-060",
        "GitHub username": "ChidhvilasTanay",
    },
    {
        Name: "Souryaman Singh",
        "Roll number (eg. 2020IMT-XXX)": "2019BCS-082",
        "GitHub username": "Souryaman",
    },
    {
        Name: "Samarth Garg",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-085",
        "GitHub username": "SamarthGarg09",
    },
    {
        Name: "Aman Vaishya",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-008",
        "GitHub username": "thebeast1819",
    },
    {
        Name: "Arun Singh Kushwaha",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-016",
        "GitHub username": "arun-kushwaha04",
    },
    {
        Name: "ADITYA RAJ",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-006",
        "GitHub username": "UNA-ONE",
    },
    {
        Name: "MODH KUSH",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-059",
        "GitHub username": "kushmodh",
    },
    {
        Name: "Hrushikesh Borhade",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS022",
        "GitHub username": "HrushiBorhade",
    },
    {
        Name: "Pragya Rathore",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-049",
        "GitHub username": "pika918",
    },
    {
        Name: "Rithvik Dave",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-079",
        "GitHub username": "Rithvik0701",
    },
    {
        Name: "Rishabh Kumar",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-078",
        "GitHub username": "rish78",
    },
    {
        Name: "Aditya Singh Hada",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-006",
        "GitHub username": "adityahada",
    },
    {
        Name: "Sukhveer Singh",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-071",
        "GitHub username": "Rexbeast2",
    },
    {
        Name: "Nirupama Singh",
        "Roll number (eg. 2020IMT-XXX)": "2020-IMG-045",
        "GitHub username": "Niru8449",
    },
    {
        Name: "Rishitha",
        "Roll number (eg. 2020IMT-XXX)": "2020-IMG-047",
        "GitHub username": "Padi-Rishitha",
    },
    {
        Name: "HARSH VAIDH",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-025",
        "GitHub username": "HVAIDH5",
    },
    {
        Name: "Ayan Nafees",
        "Roll number (eg. 2020IMT-XXX)": "2020IMG-014",
        "GitHub username": "ayannafees",
    },
    {
        Name: "Khushi Soni",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-045",
        "GitHub username": "ks20soni",
    },
    {
        Name: "Devanshu Patidar",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-026",
        "GitHub username": "deadmanbmk6",
    },
    {
        Name: "Kshitij Ayush",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-047",
        "GitHub username": "kshitij-404",
    },
    {
        Name: "Aniket Gautam",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-010",
        "GitHub username": "aniket1251",
    },
    {
        Name: "Disha Singh",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-030",
        "GitHub username": "disha9112",
    },
    {
        Name: "CH SAHITHI",
        "Roll number (eg. 2020IMT-XXX)": "2020-BCS-023",
        "GitHub username": "chsahithi3812",
    },
    {
        Name: "Arushi Agrawal",
        "Roll number (eg. 2020IMT-XXX)": "2020IMT-017",
        "GitHub username": "arushi2715",
    },
    {
        Name: "Gandla Akshith",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-030",
        "GitHub username": "AkshithGandla",
    },
    {
        Name: "Tejasri",
        "Roll number (eg. 2020IMT-XXX)": "2020BCS-029",
        "GitHub username": "tejasri415",
    },
];

const data = {}
students.map(student => {
    data[student["GitHub username"]] = {
        name: student["Name"],
        rollNumber: student["Roll number (eg. 2020IMT-XXX)"],
        score: 0
    }
})

fs.writeFileSync("students.json", JSON.stringify(data, null, 2));