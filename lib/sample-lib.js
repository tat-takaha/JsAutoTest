// 挨拶を返す関数
exports.hello = (name) => "はろー！"+ name
// 合計を返す関数
exports.sum = (...arg) => {
  let result = 0
  for(let i of arg){
    result += i
  }
  return result
}
