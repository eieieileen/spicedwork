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

app.get("/cookie", (req, res) => {
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
});
// <input type="submit" value="🍪 SUBMIT 🍪">

// In the POST /cookie route,
// check the value of the checkbox that was submitted.
// If the cookie policy was accepted,
// set a cookie to remember that fact across requests,
// and redirect to the url the user had been attempting to navigate
// to before being redirected to /cookie.
// If the user did not accept the cookie policy,
// send a page that tells the user they cannot use the site without accepting cookies.
// You can set the cookie using the res.cookie method.

app.post("/cookie", (req, res) => {
    // console.log("a ${req.method} request was made to the ${req.url} route ");
    console.log("req.body:", req.body);
    const { checkbox } = req.body;
    if (checkbox) {

        console.log("cookies accepted yaaay!");
    } else {
        console.log("no cookies :(");
    }
});

// app.get("/private", (req, res) => {
//     console.log("req.cookies iuegfhiaush: ", req.cookies);
//     if (req.cookies.authenticated) {
//         res.send(
//             `🍪<h1>In order to use this site you must accept the cookies 🍪</h1>`
//         );
//     }
// });

app.listen(8080, () => console.log("Listening to my boss Eileen 🦁"));
