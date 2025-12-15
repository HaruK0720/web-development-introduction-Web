'use strict';
// IDをキーに要素を取得する方法
const e = document.getElementById('button'); // ID:buttonの要素を取得
e.addEventListener('click', () => {
    // console.log('Clicked!')
    const result = document.getElementById('result');
    console.log(result.innerText);
}, false);