class Tree {
}

class Node extends Tree {
  constructor(left, v, right) {
    super()
    this.v = v;
    this.left = left;
    this.right = right;
  }
}

class Leaf extends Tree {
  constructor(v) {
    super()
    this.v = v;
  }
}

firstTree = new Node(
  new Node(new Leaf(7), 3, new Leaf(3)), 6, new Node(new Leaf(8), 4, new Leaf(1))
);
