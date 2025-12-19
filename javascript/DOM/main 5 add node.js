'use strict';
// ノードを追加しよう
const e = document.getElementById('button');
e.addEventListener('click', () => {
    const li = document.createElement('li');             // li要素を作成
    const text = document.createTextNode('test');        // テキストノードを作成 (テキストは「test」)
    li.appendChild(text);                                // li要素の子要素にテキストノードを追加
    const listElement = document.getElementById('list'); // ul要素を取得
    listElement.appendChild(li);                         // 親要素であるul要素(id=list)の子要素にli要素を追加 <li>test</li>
});