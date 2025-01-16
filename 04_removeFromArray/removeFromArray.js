const removeFromArray = function(a, ...args) {

    const newArray = [];

    a.forEach(element => {
        if (!args.includes(element)){
            newArray.push(element);
        }
    });

    return newArray;

};

// Do not edit below this line
module.exports = removeFromArray;
