"use strict";
let olimpic_newgame = [
    {
        name: "쇼트트랙",
        type: "혼성 계주"
    },
    true,
];
function sum1(a, b) {
    console.log(a + b);
}
sum1(5, 11);
function sum2(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum2(1, 2, 3, 4, 10));
