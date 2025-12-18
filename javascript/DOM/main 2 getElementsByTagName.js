'use strict';
// タグ名をキーに要素を取得する方法
const e = document.getElementById('button'); 
e.addEventListener('click', () => {
    const elements = document.getElementsByTagName('div'); // タグ名：div の要素を取得　※複数ある場合、HTMLCollectionという配列と似た構造のデータが返る。存在しない場合は空のHTMLCollection([])を返す
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].innerText);
    }
}, false);