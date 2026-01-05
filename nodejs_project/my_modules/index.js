const arithmetic = require('./arithmetic.js');
const string_concat = require('./string_concat.js');

module.exports = {
    arithmetic,
    string_concat
};

// ディレクトリ内の arithmeticとstring_concatモジュールをインポートし、一つのオブジェクトとしてまとめてエクスポート。
// これにより、my_modulesディレクトリをインポートするだけで、両方のモジュールにアクセスできるようになる。