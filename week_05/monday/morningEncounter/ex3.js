function logInfo(city) {
    const {name, country, population: numPeople} = city;

    // const name = city.name;
    // const country = city.country;
    // const numPeople = city.population;

    console.log(`${name} is in ${country} and has ${numPeople} in it.`);
}
logInfo({ name: "Rotterdam", country: "Netherlands", population: 84 });

