'use strict';
// name属性をキーに要素を取得する方法
const e = document.getElementById('button'); 
e.addEventListener('click', () => {
    const elements = document.getElementsByName('result'); // name属性が'result'の要素をすべて取得（配列に似たHTMLCollectionが返る）
    console.log(elements[0].value); // 取得した要素のうち、最初の要素のvalue属性 → テキストボックスに入力した文字を表示
}, false);