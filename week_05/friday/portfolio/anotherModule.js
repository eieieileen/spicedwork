const fs = require("fs");

module.exports.projectOverviewList = function () {
    console.log("function in another module running");
    let list = fs.readdirSync(__dirname + "/projects");
    let html = "";
    for (var i = 0; i < list.length; i++) {
        
        html += `<a href="${list[i]}">${list[i]}</a>`;
        
    }
    return html;
};

// generate html overview of list of all proejcts
// read the content of our projects directory
// use readdirSync(start of with this) for this, 
//create html string, loop through our list of directories 
//that are container in the projects folder, 
//and for each project in ouor array that 
//gets returned from readdirSync we want to add 
//a link for the respective project. 
//make sure that function returns a complete html string.

// Create a module to generate the projects page. XX
// This module should require fs XX
// and and use it to read the contents of the projects directory

// and build a list of links and link text to put into html.
// The link href can be to the project directory
// and the link text can just be the name of the directory
// containing the project.
// Finally, this module should add to its exports a method
// that returns the html string it created.
