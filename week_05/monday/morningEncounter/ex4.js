function getNameAndCountry (obj) {
    [obj.name, obj.country];
}

getNameAndCountry();
// let getNameAndCountry = ({ name, country }) => [name, country];



var getRelocatedCity = {
    city1: "Germany",
    city2: "Germany",
    function: getNameAndCountry(city2) {
        return "Germy"
    }
};



// let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
//     let [, country] = getNameAndCountry(city2);
//     return {
//         ...city1,
//         country,
//     };
// };
