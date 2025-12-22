'use strict';
const e = document.getElementById('button');
e.addEventListener('click', () => {
    const text = document.getElementById('input');
    const textNode = document.createTextNode(text.value);
    const li = document.createElement('li');
    li.appendChild(textNode);
    const listElement = document.getElementById('list');
    listElement.appendChild(li);
});


// 演習解答例
// 'use strict';
// const e = document.getElementById('button');
// e.addEventListener('click', () => {
//   const textBox = document.getElementById('textBox');
//   const li = document.createElement('li');
//   const text = document.createTextNode(textBox.value);
//   li.appendChild(text);
//   list.appendChild(li); // <li>test</li>
// }, false);


// 演習：DOM操作

// ・「ノードを追加」のレクチャー jsファイル5 で学習したコードを、改修。
// ・ユーザーがテキストボックスに文字列を入力後、
// ・ユーザーがボタンを押すと、
// ・リストの詐欺尾の項目として文字列が追加される。

// ・補足
//  テキストボックスの要素を取得するには、getElementByIdメソッドを利用できる。