//console.log($);

(function (countries) {
    // console.log("countries: ", countries);
    var searchField = $("input");
    //console.log("searchField:" , searchField);
    var results = $(".results");
    // console.log("resultscontainer:", resultsContainer);
    var input = $("input");
    // console.log("results p", input);
    searchField.on("input", function () {
        //1. capture the users input and store it in a variable.
        //var userInput = searchField.val();
        // console.log("userInput :", userInput);
        // 1b. handle case insensivity (GeRmAnY should still work.)
        var userInput = searchField.val().toLowerCase();

        //2. loop through targets array
        var matchResults = [];
        for (var i = 0; i < countries.length; i++) {
            // console.log("countries:", countries[i]);
            if (countries[i].toLowerCase().indexOf(userInput) === 0) {
                // console.log("countries: ", countries[i]);
                matchResults.push(countries[i]);
            } //2b: break the loop when matchResults has 4 countries init.
            if (matchResults.length >= 4) {
                break;
            }
        }

        // console.log("input event is running");
        // console.log("matchResults:", matchResults);

        //3. loop through matchResults and declare a variable.
        var htmlForCountries = "";
        for (var j = 0; j < matchResults.length; j++) {
            //console.log("matchresultsj", matchResults[j]);
            htmlForCountries += "<p>" + matchResults[j] + "</p>";
        }
        //3b if we havent found any countries we have to render a message that says no results.

        if (matchResults == "") {
            // console.log("no results"); works
            htmlForCountries += "<p>" + "Nee vriend" + "</p>";
        }
        // console.log("htmlForCountries", htmlForCountries);
        //  4. put it in the DOM. Render it to the DOM, append it to the DOM whatever you want to call it.
        results.html(htmlForCountries);
    });

    // mouseover - on "p" tags (the countries)
    //1. we need to listen for the mouseover event on the "p" tags (the countries themselves)
    //the way we're going to add the event listener to our "p" tags is a bit different.
    //The complication is that the "p" tags aren't rendered in the DOM until AFTER the page loads.
    //Because of this we need to add the event listener a bit different than normal
    // you're going to have to look up event delegation to get the mouseover event listener on the "p" tags
    //2. we're going to highlight them in JS. In CSS define a .highlight class (it's just going to be a background color)
    //3. So when the user mouses over a country, give that country that .highlight class
    //4. Make sure all the countries that AREN'T being moused over do not have the .highlight class

    var p = $("p");
    // console.log("results p", paragraph);
    results.on("mouseover", "p", function () {
        // console.log("hello");
        $(this).addClass("highlight");
    });

    results.on("mouseleave", "p", function () {
        $(this).removeClass("highlight");
    });

    //mousedown - on "p" tags (the countries)
    //1. when user mousesdown on a country, we want to set the value of the input field to the country the user moused down on.
    //2. we can figure out which country the user clicked on using the event object.
    //The thing we care about the most is the text contained within the event target.
    //3. the list of countries should go away

    results.on("mousedown", "p", function () {
        console.log("Hello");
        searchField.val($(this).text());
        results.html("");
    });

    //keydown - on the document
    //up arrow:
    //1. if no country has the highlight class, add the highlight class to the last country in the list.
    //2. if the first country in our last has the highlight class, do nothing
    //3. if any other county other than the first has the highlight class, we want to remove the highlight from the one
    //that currently has it, and add the highlight class to previous ountry in the list.
    input.on("keydown", function (event) {
        if (event.keyCode == 40) {
            $("p").addClass("highlight");
            // console.log("keyDown");
        } else if (event.keyCode == 38) {
            $("p").addClass("highlight");
            console.log("keyUp");
        } if (p.length {
            
        })
    });

    //6. blur - happens on input field -
    //this just means you've clicked OUT of an input field
    // results.on("blur", "p", function () {
    //     $(this).removeClass(".results");
    // });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei Darussalam",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Costa Rica",
    "Côte D'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Democratic People's Republic of Korea",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kuwait",
    "Kyrgyzstan",
    "Lao People’s Democratic Republic",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Republic of Korea",
    "Republic of Moldova",
    "Romania",
    "Russian Federation",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syrian Arab Republic",
    "Tajikistan",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United Republic of Tanzania",
    "United States of America",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Viet Nam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
]);

//  Pseudo-code:
//             1. capture the users input and store it in a variable.
//             1b. handle case insensivity (GeRmAnY should still work.)

//             2. compare the input we got from the user with the countries in the array, specifically, we need to find countries that START with the input we got from the user.
//             2b. we're going to stop once we've found 4 countries.

//             3. We need to take those 4 countries and put them in something like a div or p tag.
//             3b. if we havent found any countries we have to render a message that says so noresults.

//             4. put it in the DOM. Render it to the DOM, append it to the DOM whatever you want to call it.
