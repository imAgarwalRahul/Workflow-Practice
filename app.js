const express = require("express");
const app = express();
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    let name = "Rahul Agarwal";
    res.render("index", { myName: name });
});

app.listen(3001, () => {
    console.log("Server running");
});
