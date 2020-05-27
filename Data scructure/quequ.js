const LinkedList = require('./linkedList')
class QuequByArray {
  constructor() {
    this.isReverse = false
    this.quequ = []
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

class quequByLinkedList {
  constructor(...item) {
    this.isReverse = false
    this.quequ = new LinkedList()
  }
  push(...item) {
    item.forEach(i => {
      if (this.isReverse) this.quequ.addTail(i)
      else this.quequ.addHead(i)
    })
    return item
  }
  pop() {
    return this.isReverse
      ? this.quequ.removeHead()
      : this.quequ.removeTail()
  }
  reverse() {
    this.isReverse = !this.isReverse
  }
}

const testQuequ = new quequByLinkedList()
testQuequ.reverse()
testQuequ.push(1, 2, 3)
console.log(testQuequ.quequ)