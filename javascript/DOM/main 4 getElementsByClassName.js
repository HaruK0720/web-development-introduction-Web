'use strict';
// class属性をキーに要素を取得する方法
const e = document.getElementById('button'); 
e.addEventListener('click', () => {
    const elements = document.getElementsByClassName('foo');
    for (let i = 0; i < elements.length; i++) {
        console.log(elements[i].innerText);
    }
}, false);