const findTheOldest = function (people) {
    let oldestAge = getAge(people[0].yearOfBirth, people[0].yearOfDeath);
    let oldest = people[0];

    for (let person of people) {
        let age = getAge(person.yearOfBirth, person.yearOfDeath);
        if (age > oldestAge) {
            oldestAge = age;
            oldest = person;
        }
    }
    return oldest;
};

// Helper function, help handle edge cases also
const getAge = function (birthYear, deathYear) {
    if (!deathYear) {
        deathYear = new Date().getFullYear();
    }
    return deathYear - birthYear;
}


// Do not edit below this line
module.exports = findTheOldest;
