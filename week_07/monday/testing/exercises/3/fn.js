module.exports = function fn(str) {
    if (typeof str != "string" && typeof str != []) {
        return null;
    } else if (typeof str == "string") {
        let newStr = str.split("").reverse().join("");
        return newStr;
    } else {
        for (let i = 0; i < str.length; i++) {
            
        }
    }
};
