class Quequ {
  constructor(...item) {
    this.isReverse = false
    this.quequ = [...item]
  }
  push(...item){
    return this.isReverse
      ? this.quequ.unshift(...item)
      : this.quequ.push(...item)
  }
  pop(){
    return this.isReverse
      ? this.quequ.pop()
      : this.quequ.shift()
  }
  reverse(){
    this.isReverse = !this.isReverse
  }
}

const item = [1, 2, 3]
const quequ = new Quequ(...item)
quequ.push(...item)
quequ.pop()
console.log(quequ)

quequ.reverse()
quequ.pop()
quequ.pop()
console.log(quequ)