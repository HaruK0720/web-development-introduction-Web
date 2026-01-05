// ↓ディレクトリのモジュールを読み込む
const my_modules = require('./my_modules'); 

const sum = my_modules.arithmetic.add(10, 5);
console.log(`加算結果: ${sum}`);

const difference = my_modules.arithmetic.subtract(10, 5);
console.log(`減算結果: ${difference}`);

const concat = my_modules.string_concat.concat('Hello', 'Node.js');
console.log(`結合結果: ${concat}`);


// haru_k@HaruKMacBook-Air nodejs_project % node modules_app.js
// 加算結果: 15
// 減算結果: 5
// 結合結果: HelloNode.js
// haru_k@HaruKMacBook-Air nodejs_project % 