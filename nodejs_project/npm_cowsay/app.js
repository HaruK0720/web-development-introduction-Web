const cowsay = require('cowsay');
console.log(
    cowsay.say({
        text: 'Hello, npm cowsay!',
        e: 'oO',
        T: 'U '
    })
);
 

// --- ターミナルで実行 --- 
// haru_k@HaruKMacBook-Air npm_cowsay % node app.js
//  ____________________
// < Hello, npm cowsay! >
//  --------------------
//         \   ^__^
//          \  (oO)\_______
//             (__)\       )\/\
//              U  ||----w |
//                 ||     ||
// haru_k@HaruKMacBook-Air npm_cowsay % 




// === npmの初期化とcowsayパッケージのインストール ===
// haru_k@HaruKMacBook-Air nodejs_project % cd npm_cowsay
// --- 初期化 ---
// haru_k@HaruKMacBook-Air npm_cowsay % npm init -y
// Wrote to /Users/haru_k/web-development-introduction-Web/nodejs_project/npm_cowsay/package.json:

// {
//   "name": "npm_cowsay",
//   "version": "1.0.0",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "",
//   "license": "ISC",
//   "description": ""
// }


// --- cowsayパッケージのインストール --- 
// haru_k@HaruKMacBook-Air npm_cowsay % npm install cowsay

// added 41 packages, and audited 42 packages in 2s

// 3 packages are looking for funding
//   run `npm fund` for details

// found 0 vulnerabilities
// haru_k@HaruKMacBook-Air npm_cowsay % 



