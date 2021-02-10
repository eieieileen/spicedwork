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
        projects,
    });
    // res.redirect("/projects/:project");
});

app.get("/projects/:project", (req, res) => {
    const { project } = req.params;
    const selectedProject = projects.find((item) => item.directory == project);
    if (!selectedProject) {
        return res.sendStatus(404);
    }
    console.log("req.params:", req.params);
    res.render("description", {
        layout: "main",
        projects
    });
});

app.listen(8080, () => console.log("👸 Listening to my queen Eileen 👸"));
