const getAge = function(birth, death){
        if(!death){
            death = new Date().getFullYear()}
        return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldes, currentPerson) => {
        const oldestAge = getAge(oldes.yearOfBirth, oldes.yearOfDeath);
        curentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
     return oldestAge < curentAge ? currentPerson : oldes;

    });
};

// Do not edit below this line
module.exports = findTheOldest;
