const removeFromArray = function(arr, ...args) {
    let res = []
    for (x of arr) {
        if (args.includes(x)){}
        else {
            res.push(x)
        }
    }
    return res
};

// Do not edit below this line
module.exports = removeFromArray;
