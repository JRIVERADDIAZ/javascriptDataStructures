class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

   inserBalancingNode = (node, element) => {
        if(node === null) {
            node = new Node(element);
        } else if(element < node.key){
            node.left = this.inserBalancingNode(node.left, element);
            if (node.left !== null) {
                if ((this.getHeight(node.left) - this.getHeight(node.right)) > 1) {
                    if (element < node.left.key) {
                        node = this.rotateLL(node);
                    } else {
                        node = this.rotateLR(node);
                    }
                }
            }
        } else if(element > node.key){
            node.right = this.inserBalancingNode(node.right, element);
            if (node.right !== null) {
                if ((this.getHeight(node.right) - this.getHeight(node.left)) > 1) {
                    if (element > node.right.key) {
                        node = this.rotateRR(node);
                    } else {
                        node = this.rotateRL(node);
                    }
                }
            }
        } else {
            return node;
        }
   }

    insert(key) {
        let newNode = new Node(key);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    minNode(node) {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }

        return null;
    }

    min = () => {
        return this.minNode(this.root);
    };

    postOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.key);
        }
    }

    postOrderTraverse(callback) {
        this.postOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this.inOrderTraverseNode(node.right, callback);
        }
    }

    printNode(value) {
        console.log(value);
    }

    inOrderTraverse(callback) {
        this.inOrderTraverseNode(this.root, callback);
    }

    searchNode = (node, key) => {
        if (node === null) {
            return false;
        }

        if (key < node.key) {
            return this.searchNode(node.left, key);
        } else if (key > node.key) {
            return this.searchNode(node.right, key);
        } else {
            return true;
        }
    }

    search = (key) => {
        return this.searchNode(this.root, key);
    }

    removeNode = (node, key) => {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        } else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        } else {

            // case 1 - a leaf node
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }

            // case 2 - a node with only 1 child
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }

            // case 3 - a node with 2 children
            let aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }



}

// Example usage
let tree = new BinarySearchTree();
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(3);


tree.inOrderTraverse(tree.printNode);
let min = tree.minNode(tree.root);

console.log('min', min);

console.log(tree.search(20) ? 'Key 1 found.' : 'Key 1 not found.');
