const argv = process.argv;
console.log(argv[0]);
console.log(argv[1]);
console.log(argv[2]);
console.log(argv[3]);


// process.argvの使い方
// コマンドラインでNode.jsを実行する際に渡される引数をすべて格納する配列

// Node.jsの実行されるときに渡される引数が順番に格納する。
// インデックス（キー）：値
// 0：Node.jsの実行ファイルパス
// 1：実行されているスクリプトのファイルパス
// 2：コマンドラインで渡された第一引数
// 3：コマンドラインで渡された第二引数


// --- 実際にターミナルで実行  ---
// haru_k@HaruKMacBook-Air nodejs_project % node argv.js 123 'test'      // コマンド 第一引数：123、第二引数：'test'
// /Users/haru_k/.nvm/versions/node/v22.17.0/bin/node                    // index:0、実行ファイルパス
// /Users/haru_k/web-development-introduction-Web/nodejs_project/argv.js // index:1、スクリプトのファイルパス
// 123                                                                   // index:2、第一引数
// test                                                                  // index:3、第二引数
// haru_k@HaruKMacBook-Air nodejs_project % 