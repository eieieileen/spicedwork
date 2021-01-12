function number(num) {
    if (num <= 0 || isNaN(num)) {
        return "ERROR";
    } else if (num >= 1000000) {
        return num;
    } else {
        number(num * 10);
    }
}

number(NaN);
