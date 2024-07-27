// server.js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/images", (req, res) => {
  const imgDir = path.join(__dirname, "public", "img");
  fs.readdir(imgDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: "Failed to read image directory" });
    }
    const imageFiles = files.filter(
      (file) => file.endsWith(".jpg") || file.endsWith(".png"),
    );
    res.json(imageFiles);
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
