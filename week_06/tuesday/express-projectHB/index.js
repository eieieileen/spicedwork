const express = require("express");
const app = express();
const hb = require("express-handlebars");
const projects = require("./projects.json");

app.engine("handlebars", hb());
app.set("view engine", "handlebars");

app.use(express.static("./public"));
app.use(express.static("./projects"));

app.get("/", (req, res) => {
    res.render("welcome", {
        layout: "main",
        cohort: "Fennel",
        projects,
    });
});

app.get("/project/:project", (req, res) => {
    const { project } = req.params;
    console.log("req.params:", req.params);
    const selectedProject = projects.find((item) => item.project == project);
    if (!selectedProject) {
        return res.sendStatus(404);
    }
});

app.listen(8080, () => console.log("👸 Listening to my queen Eileen 👸"));
