class Tree {
}

class Node extends Tree {
  constructor(left, v, right) {
    super()
    this.v = v;
    this.left = left;
    this.right = right;
  }

  matchWith(pattern) {
    return pattern.Node(this.left, this.v, this.right);
  }

  toString() {
    return `Node(${this.left.toString()},${(this.v)},${this.right.toString()})`;
  }
}

class Leaf extends Tree {
  constructor(v) {
    super()
    this.v = v;
  }

  matchWith(pattern) {
    return pattern.Leaf(this.v);
  }

  toString() {
    return (`Leaf(${this.v} )`);
  }
}


Tree.prototype.reverse = function () {
  return this.matchWith({
    Leaf: v => new Leaf(v),
    Node: (left, v, right) => new Node(right.reverse(), v, left.reverse())
  });
}
const treeInstance =
  new Node(new Node(new Leaf(2), 4, new Leaf(2)), 6, new Node(new Leaf(7), 8, new Leaf(9)));

console.log(treeInstance.toString());

const reverse = treeInstance.reverse();
console.log(reverse.toString())
