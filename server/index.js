import { join, resolve } from "path";
import express from "express";
import cors from "cors";
import fileupload from "express-fileupload";
import fs from "fs";

const app = express();

app.use(
  fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  }),
  cors()
);

app.get("/images", (req, res) => {
  const path = join("data", "images.json");
  res.header("Content-Type", "application/json");
  res.sendFile(resolve(path));
});

app.get("/", (req, res) => {
  res.send("This is from express.js");
});

app.post("/upload", (req, res) => {
  const csv = fs.readFileSync(req.files.file.tempFilePath, "utf8");
  const array = csv.split("\n");
  let result = [];

  for (let i = 1; i < array.length - 1; i++) {
    const row = array[i]
      .split(";")
      .map((elem) => elem.replace(/["]/gi, ""));
    const obj = {
      id: row[0],
      name: row[1],
      picture: {
        url: row[2],
        width: 640,
        height: 480,
      },
    };

    result.push(obj);
  }
  const json = JSON.stringify(result);
  res.send(json);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server started on port ${port}: http://localhost:${port}`);
});
