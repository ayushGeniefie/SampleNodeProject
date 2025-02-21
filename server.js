const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/api", (req, res) => {
  console.log(req.ip);
  res.send({ message: req.ip, status: "success" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
