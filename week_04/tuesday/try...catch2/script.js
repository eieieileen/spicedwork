// console.log("sanitycheck");

(function () {
 
    var numbersInG = [
        "ein",
        "zwei",
        "drei",
        "vier",
        "fünf",
        "sechs",
        "sieben",
        "acht",
        "neun",
        "zehn",
    ];

    function askForNumber() {
        var num = prompt("Please enter a number between 1 and 10");
        if (num >= 1 && num <= 10 && num == parseInt(num)) {
            console.log(num);
            return num;
        }
        throw new Error("Bad number");
    }

    function translateNumberToGerman() {
        console.log(numbersInG[5]);
        try { 
            var num = askForNumber;
            var result = num >= 1 && num <= 10 == numbersInG - 1;
            alert(result);
            
        } catch (error) {
            console.log("bye");
        }
    }
    translateNumberToGerman();
})();
