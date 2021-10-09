# git-init-FOSS-API

This is the backend repo of git-INIT-FOSS-Client

# Screenshots

![file](https://user-images.githubusercontent.com/84467090/135828886-1c6740f3-861e-42fc-9d64-442c6514452a.jpeg)

![file 1](https://user-images.githubusercontent.com/84467090/135836526-31442296-07c1-4fcd-bd00-5c4c7b009bc2.jpeg) ![file2](https://user-images.githubusercontent.com/84467090/135836654-34fbeb4b-fc0e-4c72-b858-d99e274589cc.jpeg)

# Project Description

This project is made to introduce students to the world of open source. Here, the users can navigate to find the project most suitable to them and then contribute to it.

# Features Implemented

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

## 2. Backend

- All the data related to the project, like student details, student scores, student score card and the projects are stored in **public** folder.
- The **src** fetches the student details and then calculates the score of students.
- The cron command-line utility, also known as cron job is a job scheduler on Unix-like operating systems. Users who set up and maintain software environments use cron to schedule jobs to run periodically at fixed times, dates, or intervals.
- This server has a cron job built-in which runs every 1 hour and updates the scores of participants in score.json file, which is then served using a single endpoint to the frontend.
- You can learn more about cron from here ([Cron](https://help.ubuntu.com/community/CronHowto#Introduction)).

# Technologies and Packages Used

1. Node
2. Express
3. Cron
4. Node Fetch

# Local Setup

1. Fork the repositry.
2. Clone the repositry (`git clone URL`).
3. Open the folder in which you cloned the repositry.
4. Run(`npm install`).
5. Run (`npm start`).
6. This will start your server.

# Contributors

<a href="https://github.com/kunaljain0212/git-init-FOSS-API/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=kunaljain0212/git-init-FOSS-API" />
</a>
