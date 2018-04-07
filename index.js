// node.js v8以降で動作します。
const lib = require('./lib/sample-lib.js')
exports.hi 	= (name) => "やあ！"+ name

exports.hello 		= (name) => lib.hello(name)                                             // sample-lib.jsの関数を利用している
exports.helloSum 	= (name , ...arg) => `${lib.hello(name)}。合計は${lib.sum(...arg)}だす。`   // sample-lib.jsの関数を利用している
