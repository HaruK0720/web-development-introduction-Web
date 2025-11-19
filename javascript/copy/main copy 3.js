'use strict';
let x; // 変数xを宣言（まだ何も入っていない状態）
console.log(x); // 変数xの中身を表示（undefinedと表示される）

x = 1; // 変数xに1を代入
console.log(x); // 変数xの中身を表示（1と表示される）

x = 2; // 変数xに2を "再"代入
console.log(x); // 変数xの中身を表示（2と表示される）

// let x; // 変数xを "再" 宣言→エラー --- IGNORE ---

let y = 10; // 変数yを宣言し、10を代入
console.log(y);

y = 11;
console.log(y);

// let str = "Hello JavaScript";
let str = 'Hello JavaScript'; // 変数strを宣言し、文字列を代入 「'」でも「"」でもOK!
console.log(str);

// let i;
// let j;
// let k;
let i, j, k; // 変数i、j、kをまとめて宣言

const a = 1; // 定数・再代入できない変数・constantの略
console.log(a);
// a = 2; // 定数aに再代入→エラー --- IGNORE ---

const prefecture = 'Tokyo';
console.log(prefecture);