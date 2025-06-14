const sumAll = function(a,b) {
    sum=0
    if (Number.isInteger(a) && Number.isInteger(b)){
        if (a>=0 && b>=0) {   
            if (b>a){
                for (let i=a;i<=b;i++){
                    sum=sum+i
                }
                return sum
            }
            else {
                for (let i=b;i<=a;i++){
                    sum=sum+i
                }
                return sum
            }
        } 
        else {
            return "ERROR"
        }
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
