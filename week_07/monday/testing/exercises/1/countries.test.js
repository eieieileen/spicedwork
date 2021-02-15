const countries = require('./countries');

test("When find is passed an empty string, it returns an empty array", () => {
    expect(countries.find("")).toEqual([]);
});

test("The array that it returns contains no more than four matches", () => {
    expect(countries.find("a").length).toBe(4);
});

test("The search is case insensitive", () => {
    expect(countries.find("cUBA")).toEqual(["Cuba"]);
});

test("If there are no matching countries, an empty array is returned", () => {
    expect(countries.find("Eileen")).toEqual([]);
});
