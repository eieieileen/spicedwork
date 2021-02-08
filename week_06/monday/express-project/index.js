const express = require("express"); // importing the function
const app = express(); //calling it
const cookieParser = require("cookie-parser");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // creates a key value pair obj
app.use(express.static("./projects"));

app.use((req, res, next) => {
    console.log(`MIDDLEWARE LOG : ${req.method} to ${req.url} route`);
    next();
});

// Create a /cookie route that responds to GET requests XX
// with a page that warns users XX
// that to use this site they must accept cookies. XX
// The page should have a checkbox for users to indicate
// that they accept the cookie policy and a button to submit.
// When users click on the button, a POST to /cookie should occur.

//HOMEPAGE
app.get("/cookie", (req, res) => {
    if (!req.cookies.authenticated) {
        //console.log("req.cookies 2nd", req.cookies);
        // res.cookie("second cookie", "still exciting");
        // res.cookie("authenticated", true);
        res.send(`
    
    <h1>See a wonderful portfolio here</h1>

    
    
    <h2>🍪However, to see all the projects you have to accept the cookies!🍪</h2>

    <p>To accept the 🍪🍪🍪 click the checkbox and submit 💥</p> 

    <form method="POST">
    
    <input type="checkbox" name="checkbox">
    
    <br>
    <br>
    
    
    <button>🍪 SUBMIT 🍪</button>

    </form> 
    
    `);
    } else {
        res.redirect("/");
    }
});
// <input type="submit" value="🍪 SUBMIT 🍪">

//POST HOMEPAGE
app.post("/cookie", (req, res) => {
    // console.log("a ${req.method} request was made to the ${req.url} route ");
    console.log("req.body:", req.body);
    const { checkbox } = req.body;
    if (checkbox) {
        res.cookie("authenticated", "true");
        console.log("cookies accepted yaaay!");
        res.redirect("/");
    } else {
        console.log("no cookies :(");
        res.redirect("/cookieaccept");
    }
});

//REDIRECT PAGE
app.get("/", (req, res) => {
    if (req.cookies.authenticated) {
        res.send(`
        <h1>You have been redirected to the homepage</h1>
    `);
    } else {
        res.redirect("/cookie");
    }
});

//DID NOT ACCEPT COOKIES
app.get("/cookieaccept", (req, res) => {
    if (!req.cookies.authenticated) {
        res.send(`
     <h1>Unfortunately you have to accept the cookies :(</h1>

    
    
    <h2>🍪I'm pretty sure you won't regret it!🍪</h2>

    <p>To accept the 🍪🍪🍪 click the checkbox and submit 💥</p> 

    <form method="POST">
    
    <input type="checkbox" name="checkbox">
    
    <br>
    <br>
    
    
    <button>🍪 SUBMIT 🍪</button>

    </form> 
    
    `);
    } else {
        res.redirect("/");
    }
});

//DID NOT ACCEPT COOKIES POST
app.post("/cookieaccept", (req, res) => {
    // console.log("a ${req.method} request was made to the ${req.url} route ");
    console.log("req.body:", req.body);
    const { checkbox } = req.body;
    if (checkbox) {
        res.cookie("authenticated", "true");
        console.log("cookies accepted yaaay!");
        res.redirect("/");
    } else {
        console.log("no cookies :(");
        res.redirect("/cookie");
        console.log("a ${req.method} request was made to the ${req.url} route");
    }
});

app.listen(8080, () => console.log("Listening to my boss Eileen 🦁"));
