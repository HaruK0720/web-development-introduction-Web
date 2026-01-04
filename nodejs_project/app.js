const arithmetic = require('./arithmetic.js'); // './' → 同じディレクトリにあることを示す
const string_concat = require('./string_concat.js');

const sum = arithmetic.add(5, 3); 
console.log(`加算結果: ${sum}`);

const difference = arithmetic.subtract(5, 3); 
console.log(`減算結果: ${difference}`);

const concat = string_concat.concat('Hello', 'World');
console.log(`結合結果: ${concat}`);


// haru_k@HaruKMacBook-Air nodejs_project % node app.js
// 加算結果: 8
// 減算結果: 2
// 結合結果: HelloWorld
// haru_k@HaruKMacBook-Air nodejs_project % 


// モジュールのメリット
// 1. 役割の明確化
// 　・各ファイルが一つの処理に集中しており、コードがわかりやすくなる。
// 　・例）計算処理をまとめたモジュール・・・それぞれの役割が明確になり、コードの見通しが良くなる。
// 2. 保守性向上
// 　・修正や機能追加が簡単になる。
// 　・他の部分に影響を与えずに修正が可能。
// 3. 再利用性
// 　・必要なモジュールだけを簡単に他のプロジェクトに移植可能。