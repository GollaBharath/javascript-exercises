const fibonacci = function(cnt) {
    cnt = parseInt(cnt)
    if (cnt<0){
        return "OOPS"
    }
    else if (cnt == 0){
        return 0
    }
    else if (cnt<2){
        return 1
    }
    a = 1
    b = 1
    n = 2
    while (n<=cnt) {
        let c = a+b
        b=a
        a=c
        n++
    }
    return b
};

// Do not edit below this line
module.exports = fibonacci;
