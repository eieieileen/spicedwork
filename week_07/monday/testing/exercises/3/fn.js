module.exports = function fn(str) {
    let newMe = [];
    if (typeof str != "string" && !Array.isArray(str)) {
        return null;
    } else if (typeof str == "string") {
        let newStr = str.split("").reverse().join("");
        return newStr;
    } else {
        for (let i = 0; i < str.length; i++) {
            if (typeof str[i] != "string" && !Array.isArray(str[i])) {
                newMe.push(null);
            } else {
                let newStr = str[i].split("").reverse().join("");
                newMe.push(newStr);
            }
        }
        return newMe;
    }
};
