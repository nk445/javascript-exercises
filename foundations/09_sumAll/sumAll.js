const sumAll = function() {
    
    // only allow positive integer parameters
    if (!Number.isInteger(arguments[0]) || !Number.isInteger(arguments[1]) ||
        arguments[0] <= 0 || arguments[1] <= 0) {
        return 'ERROR';
    }
    
    let small = Math.min(arguments[0], arguments[1]);
    let large = Math.max(arguments[0], arguments[1]);  

    let ans = 0;
    for (let i = small; i <= large; ++i) {
        ans += i;
    }

    return ans;
};

// Do not edit below this line
module.exports = sumAll;
