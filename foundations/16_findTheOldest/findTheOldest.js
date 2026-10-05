const findTheOldest = function(people) {
    return people.reduce((oldest, currPerson) => {
        if (((oldest.yearOfDeath ?? 2026) - oldest.yearOfBirth) <
            ((currPerson.yearOfDeath ?? 2026) - currPerson.yearOfBirth)) {
            oldest = currPerson;
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
