const findTheOldest = function(arr) {

return arr.reduce((oldest, currentPerson) => {
const oldestAge = age(oldest.yearOfBirth, oldest.yearOfDeath);
const currentAge = age(currentPerson.yearOfBirth, currentPerson.yearOfDeath )
return oldestAge < currentAge ? currentPerson : oldest;
});
};

const age = function (born, died){

    if(!died){
       died = new Date();
       return died.getFullYear() - born;
    }
    
    return died - born
}

// Do not edit below this line
module.exports = findTheOldest;
