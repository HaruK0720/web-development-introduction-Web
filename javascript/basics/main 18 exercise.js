'use strict';

let scores = [100, 90, 80, 70, 60]; 
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}

const avg = sum / scores.length;

console.log(`合計点: ${sum}、 平均点: ${avg}`);


// === 解答例 ===
// 'use strict';
// const scores = [100, 90, 80, 70, 60];
// let sum = 0;
// for(let i = 0; i < scores.length; i++) {
//   sum += scores[i];
// }

// const average = sum / scores.length;
// console.log(sum);
// console.log(average);