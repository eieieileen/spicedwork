function invertCase(str) {
    var newStr = "";
    for (var i in str) {
        if (str[i] === str[i].toUpperCase()) {
            newStr += str[i].toLowerCase();
        } else {
            newStr += str[i].toUpperCase();
        }
    }
    console.log(newStr);
}
invertCase("aHoewfHOEAF3c");
