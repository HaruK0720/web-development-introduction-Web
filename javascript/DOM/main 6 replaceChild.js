'use strict';
// ノードを置換しよう
const e = document.getElementById('button');
e.addEventListener('click', () => {
    const newList = document.createElement('li'); // 新しい<li>要素を作成
    newList.setAttribute('id', 'newList'); // id属性を設定
    const newText = document.createTextNode('new element'); // テキストノードを作成
    newList.appendChild(newText); // <li>要素にテキストノードを追加
    const oldList = document.getElementById('oldList'); // 置換対象の要素を取得
    const parentNode = oldList.parentNode; // 親ノード取得。  (親ノードulの参照を変数parentNodeに代入)
    parentNode.replaceChild(newList, oldList); // 置換
});