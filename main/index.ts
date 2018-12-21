import express from "express"

const app = express();

app.listen(3000, () => console.log("Server running on 3000"));

app.get("/", (req, res) => {
  res.send("Awesome! We're live debugging this!")
});