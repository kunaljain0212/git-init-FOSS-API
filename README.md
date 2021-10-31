<div align ="center">

# git-init-FOSS-API

[![Github issues](https://img.shields.io/github/issues/kunaljain0212/git-init-FOSS-API?style=for-the-badge)](https://github.com/kunaljain0212/git-init-FOSS-API/issues) [![Github forks](https://img.shields.io/github/forks/kunaljain0212/git-init-FOSS-API?style=for-the-badge)](https://github.com/kunaljain0212/git-init-FOSS-API/network/members) [![Github stars](https://img.shields.io/github/stars/kunaljain0212/git-init-FOSS-API?style=for-the-badge)](https://github.com/kunaljain0212/git-init-FOSS-API/stargazers)

</div>

This is the backend repo of git-INIT-FOSS-Client

![Screenshot](https://user-images.githubusercontent.com/84467090/139578095-b37c5507-02a9-4413-8b94-5faaf4160fad.jpeg)
![Screenshot](https://user-images.githubusercontent.com/84467090/139578135-81f339e7-5f49-4ca6-8e3c-2a7031e6fbf5.jpeg)
<img width=50% height=90% src=https://user-images.githubusercontent.com/84467090/139578153-7d7ecc80-2975-4d68-b9b5-1584735dd417.jpeg><img width=50% height=90% src=https://user-images.githubusercontent.com/84467090/139578184-915d63d6-9f13-45e1-8e84-fa2aff3df23e.jpeg>

<div align="center">

# Project Description

</div>

This project is made to introduce students to the world of open source. Here, the users can navigate to find the project most suitable to them and then contribute to it.

<div align="center">

# Features

</div>

## 1. Frontend ([Frontend Repositry](https://github.com/aaryak-shah/git-init-FOSS))

### 1. Navigation

You can navigate to projects and leaderboard from here.

### 2. Search Bar

- Here we can directly search for project or user using by Contributers Name,Maintainers Name,UserName,Project name etc.

### 3. Projects Card

In this all the information about the project is given.

### 4. LeaderBoard Tile

Here all the information of contributors is given

- Contributors Name
- Github UserName
- Contributors Roll Number
- Score
  
### 5.Statistics
 Here we have the information
 - Total number of Pull Request
 - Total number of Active Contributers
 - Number of Hard, Medium, Easy
  

## 2. Backend

- All the data related to the project, like student details, student scores, student score card and the projects are stored in **public** folder.
- The **src** fetches the student details and then calculates the score of students.
- The updaterDB.js updates the score of students. If you want to update the score manually you'll have to run (`node src\updaterDB.js`)
- This server has a cron job built-in which runs every 1 hour and updates the scores of participants in score.json file, which is then served using a single endpoint to the frontend. If you want to update the score automatically after every one hour you'll have to run (`crontab script.cron`).
- You can also edit the time, after which you want to update the scores in the _script.cron_ file.
- The cron command-line utility, also known as cron job is a job scheduler on Unix-like operating systems. Users who set up and maintain software environments use cron to schedule jobs to run periodically at fixed times, dates, or intervals.
- You can learn more about cron from here ([Cron](https://help.ubuntu.com/community/CronHowto#Introduction)).

<div align="center">

# Technologies and Packages Used

</div>

1. Node
2. Express
3. Cron
4. Node Fetch

<div align="center">

# Local Setup

</div>

## Get Started

1. Fork the repositry.
2. Clone the repositry (`git clone URL`).
3. Open the folder in which you cloned the repositry.
4. Run(`npm install`).
5. Run (`npm run dev`).
6. This will start your server locally.

## Building and running in production mode

You can run the newly built app with `npm run start`.

## Contributors

<br/>
<table>
	<tr>
		<td>
			<a href="https://github.com/kunaljain0212/git-init-FOSS-API/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=kunaljain0212/git-init-FOSS-API" />
</a>
		</td>
	</tr>
</table>

## Connect with us

<br />
<div align ="center">

<a href="https://instagram.com/aasf_iiitmg"><img src="https://img.icons8.com/ios-glyphs/50/000000/instagram-new.png"/></a>
<a href="https://www.facebook.com/aasfiiitm/"><img src="https://img.icons8.com/material/50/000000/facebook--v1.png"/></a>
<a href="https://www.linkedin.com/company/aasf-iiitmg"><img src="https://img.icons8.com/material/50/000000/linkedin--v1.png"/></a>
<a href="https://medium.com/tech-iiitg"><img src="https://img.icons8.com/ios-glyphs/50/000000/medium-monogram.png"/></a>

</div>
