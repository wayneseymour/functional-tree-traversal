import { Node, Leaf } from './tree';

const treeInstance =
  new Node(new Node(new Leaf(2), 4, new Leaf(2)), 6, new Node(new Leaf(7), 8, new Leaf(9)));

console.log(treeInstance.toString());

const reverse = treeInstance.reverse();
console.log(reverse.toString())
