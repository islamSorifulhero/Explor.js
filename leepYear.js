
// const year = 2022;
// console.log(2022 %  4);
 

// const year = 2225;
// let remainder = year % 4;
// if (remainder == 0){
//     console.log('your year is a leap year');
// }
// else {
//     console.log('your year is not a leap year');
// }


function isLeapYear(year){
    const remainder = year % 4;
    if (remainder == 0) {
        return true;
    }
    else {
        return false;
    }

}
const check2000 = isLeapYear(2000);
console.log(check2000);
