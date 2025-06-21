const palindromes = function (str) {
    str = str.toLowerCase()
    str = str.replace(/[^a-zA-Z0-9]/g, '')
    if (str.length%2 == 0){
        for (let i=0;i<((str.length)/2);i++) {
            if (str[i]!=str[str.length-i-1]) {
                return false
            }
        }
        return true
    }
    else {
        for (let i=0;i<parseInt((str.length)/2);i++) {
            if (str[i]!=str[str.length-i-1]) {
                return false
            }
        }
        return true
    }
};

// Do not edit below this line
module.exports = palindromes;
