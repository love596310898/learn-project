class Node {
  constructor(value, next, prve) {
    this.value = value;
    this.next = next;
    this.prev = prve;
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }
  addHead(value) {
    const node = new Node(value, null, this.head)
    if (this.head) this.head.next = node
    else this.tail = node
    this.head = node
  }
  removeHead() {
    if (!this.head) return null
    const value = this.head.value
    const prev = this.head.prev
    if (prev) prev.next = null
    else this.tail = null
    this.head = prev
    return value  
  }
  addTail(value) {
    const node = new Node(value, this.tail, null)
    if (this.tail) this.tail.prev = node
    else this.head = node 
    this.tail = node
  }
  removeTail() {
    if (!this.tail) return null
    const value = this.tail.value
    const next = this.tail.next
    if (next) next.prev = null
    else this.head = null
    this.tail = next
    return value
  }
  search(value) {
    let curent = this.tail
    while (curent) {
      if (curent.value === value) return value
      curent = curent.next
     }
     return null
  }
  indexof(value) {
    const indexs = []
    let index = 0
    let curent = this.tail
    while (curent) {
      if (curent.value === value) indexs.push(index)
      curent = curent.next
      index += 1
    }
    return indexs
  }
}

module.exports = LinkedList