const leapYears = function(year) {

    const isYearDivBy4 = year % 4 === 0 ; 
    const isYearDivBy100 = year % 100 === 0 ; 
    const isYearDivBy400 = year % 400 === 0



    if ( isYearDivBy4 && (!isYearDivBy100 || isYearDivBy400)){
         return true;
    }else{
        return false;
     } 
};

// Do not edit below this line
module.exports = leapYears;
