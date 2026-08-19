const removeFromArray = function() {
    let arr = arguments[0];
    let toRemove = Array.from(arguments).slice(1);
    let newArr = arr.filter(item => !toRemove.includes(item))
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
