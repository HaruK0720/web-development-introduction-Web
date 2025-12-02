'use strict';

let num = 10;

// インクリメント
num++;
console.log(num); // 11

// デクリメント
num--;
console.log(num); // 10

// 前置演算子のインクリメント
++num;
console.log(num); // 11

// 前置演算子のデクリメント
--num;
console.log(num); // 10;

console.log('---');

let num1 = 10;
let num2 = 10;
let ans1 = ++num1; // num1を先にインクリメントしてからans1に代入
let ans2 = num2++; // ans2にnum2を代入してからnum2をインクリメント

console.log(ans1); // 11
console.log(ans2); // 10