function age(death,birth) {
    const today = new Date().getFullYear()
    if (!death) {
        death = today
    }
    return death - birth
}

const findTheOldest = function(ppl) {
    
    let oldguy = ppl[0]
    for (x in ppl) {
        if (age(ppl[x].yearOfDeath,ppl[x].yearOfBirth)>age(oldguy.yearOfDeath,oldguy.yearOfBirth)) {
            oldguy = ppl[x]
        }
    }
    return oldguy
};

// Do not edit below this line
module.exports = findTheOldest;
