import express from "express";
import fs from "fs";
import path from "path";

const app = express();

const __dirname = path.resolve();

app.get("/", (req, res) => {
  fs.readFile(path.join(__dirname, "/src/score.json"), (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(JSON.parse(data.toString()));
    }
  });
});
const PORT=3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});