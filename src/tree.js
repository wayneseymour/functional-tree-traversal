export class Tree {
}

export class Node extends Tree {
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

export class Leaf extends Tree {
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

