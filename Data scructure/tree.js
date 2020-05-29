class Tree {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
  insert(value) {
    if (value > this.value) {
      if (!this.right) this.right = new Tree(value);
      else this.right.insert(value);
    } else {
      if (!this.left) this.left = new Tree(value);
      else this.left.insert(value);
    }
  }
  contains(value) {
    if (value === this.value) return true;
    if (vlaue < this.value) {
      if (!this.left) return false;
      else return this.left.contains(value);
    } else {
      if (!this.right) return fasle;
      else return this.right.contains(value);
    }
  }
  depthTraverse(order, cb) {
    order === 'pre' && cb(this.value)
    this.left && this.left.depthTraverse(order, cb)
    order === 'in' && cb(this.value) 
    this.right && this.right.depthTraverse(order, cb) 
    order === 'post' && cb(this.value)
  }
  breadthTraverse(cb) {
    const quequ = [this]
    while (quequ.length) {
      const root = quequ.shift()
      cb(root.value)
      root.left && quequ.push(root.left)
      root.right && quequ.push(root.right)
    }
  }
  getMinValue() {
    return this.left ? this.left.getMinValue() : this.value;
  }
  gitMaxValue() {
    return this.right ? this.right.gitMaxValue() : this.value;
  }
}

const tree = new Tree(10)

tree.insert(5)
tree.insert(15)
tree.insert(4)
tree.insert(6)
tree.insert(14)
tree.insert(16)
console.log(tree)
console.log(tree.gitMaxValue())