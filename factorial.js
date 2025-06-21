// for (var i = 3; i <= 10; i++) {
//     console.log(i);
// }

// var factorial = 1;
// for (var i = 3; i <= 10; i++) {
//     factorial* i
//     console.log(i);
// }


// var factorial = 1;
// for (var i = 1; i <= 5; i++) {
//     factorial = factorial * i
//     console.log(i, factorial);
// }



function factorial(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial = factorial * i;
    }
    return factorial;
}

var result = factorial(6);
console.log(result);


// var passMark = 'rohim';
// var sorifulMark = 'rohim';
// if (passMark == sorifulMark){
//     console.log('congrachulation tumi pass korso')
// }
// else{
//     console.log('sorry, tumi fell korso')
// }


