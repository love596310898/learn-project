class Stake {
  constructor(...item) {
    this.iSreverse = false
    this.stake = [...item]
  }
  push(...item) {
    return this.iSreverse 
      ? this.stake.unshift(...item) 
      : this.stake.push(...item)
  }
  pop(){
    return this.iSreverse
      ? this.stake.shift()
      : this.stake.pop()
  }
  reverse(){
    this.iSreverse = !this.iSreverse
  }
}

const item = [1, 2, 3]
const stake = new Stake(...item)
stake.push(...item)
stake.pop()
console.log(stake)

stake.reverse()
stake.pop()
stake.pop()
console.log(stake)