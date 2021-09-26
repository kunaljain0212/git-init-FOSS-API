import express from "express";
import fs from "fs";
import path from "path";

const app = express();

const __dirname = path.resolve();

app.get("/getData", (req, res) => {
  fs.readFile(path.join(__dirname, "/src/score.json"), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(data.toString()));
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
