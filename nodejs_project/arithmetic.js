function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract
}; 
// ↑これにより、他のファイルからこのモジュールを読み込んでこれらの関数を使うことができる。



// モジュールとは？
// クラスのようにメソッドや定数をまとめられるもの
// コードを分割して再利用できる単位のこと