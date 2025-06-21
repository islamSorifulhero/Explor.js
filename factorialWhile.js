// var i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }


// var i = 1;
// var factorial = 1;
// while (i <= 5) {
//     factorial = factorial * i;
//     console.log(i, factorial);
//     i++;
// }

// var i = 1;
// var factorial = 1;
// while (i <= 6) {
//     factorial = factorial * i;
//     i++;
// }
// console.log(factorial);


function factorial (n) {
    var i = 1;
    var factorial = 1;
    while (i <= n) {
        factorial = factorial * i;
        i++;
    }
    return factorial;
}
var result = factorial(5)
console.log(result);