'use strict';
// ノードを削除しよう
const e = document.getElementById('button');
e.addEventListener('click', () => {
    const parentElement = document.getElementById('list'); // 親要素を取得(今回はul要素)
    const elements = parentElement.getElementsByTagName('li'); // 子要素のli要素を取得(配列に似たHTMLCollection)
    const removeIndex = elements.length - 1; // 最後の要素のインデックスを取得 0-basedなので-1
    // console.log(elements.length);
    parentElement.removeChild(elements[removeIndex]); // 親要素から子要素を削除
});