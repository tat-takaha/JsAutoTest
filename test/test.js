// node.js v8以降で動作します。
const assert   = require('power-assert')  // power-assertをインポート
const myModule = require('../index')      // プログラム本体である、index.jsを読み込む
// テストコード
describe('作ったプログラムを次の項目ごとにテストします' , () => {

        it('「やあ！」と挨拶しないとだめ', () => {
            //assert.equal(myModule.hi('太郎'), 'やあ！太郎')
            assert.equal(myModule.hi('太郎'), 'やあ！太郎')
        })

        /*it('「ハロー！」と挨拶しないとだめ', () => {
            assert.equal(myModule.hello('太郎'), 'はろー！太郎')
        })
        */
        it('挨拶と合計を計算', () => {
            assert.equal(myModule.helloSum('太郎',1,2,3,4), 'はろー！太郎。合計は10です。')
        })

})
