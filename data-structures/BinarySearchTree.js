class BinarySearchTree {
    // Helper function to create a new node
    
    constructor() {
        // Node class
        this.Node = function (key) {
            this.key = key;
            this.left = null;
            this.right = null;
        };

        this.root = null;
    }

    // Helper function to insert a node

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

    // Helper function to search a node

    inOrderTraverseNode = (node, callBack) => {
        if (node !== null) {
            this.inOrderTraverseNode(node.left, callBack);
            callBack(node.key);
            this.inOrderTraverseNode(node.right, callBack);
        }
    }

    // Helper function to search a node

    preOrderTraversalNode = (node, callBack) => {
        if (node !== null) {
            callBack(node.key);
            this.preOrderTraversalNode(node.left, callBack);
            this.preOrderTraversalNode(node.right, callBack);
        }
    }

    // Helper function to search a node

    postOrderTraversalNode = (node, callBack) => {
        if (node !== null) {
            this.postOrderTraversalNode(node.left, callBack);
            this.postOrderTraversalNode(node.right, callBack);
            callBack(node.key);
        }
    }

    // Helper function to search a node

    minNode = (node) => {
        if (node) {
            while (node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    // Helper function to search a node

    maxNode = (node) => {
        if (node) {
            while (node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    // Helper function to print a node

    printNode = (node) => {
        console.log(node);
    }

    // Helper function to search a node

    searchNode(node, key) {
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

    // Helper funtion to remove a node

    removeNode(node, key) {

        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = this.removeNode(node.left, key);
            return node;
        }
        else if (key > node.key) {
            node.right = this.removeNode(node.right, key);
            return node;
        }
        else {
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            if (node.left === null) {
                node = node.right;
                return node;
            }
            else if (node.right === null) {
                node = node.left;
                return node;
            }

            let aux = this.minNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;

        }
    }

    // Print tree structure

    printTreeGraphical(node, level = 0, prefix = '', isLeft = null) {
        if (node !== null) {
            console.log('  '.repeat(level) + prefix + (isLeft === true ? '├── ' : '└── ') + node.key);
            this.printTreeGraphical(node.left, level + 1, 'L:', true);
            this.printTreeGraphical(node.right, level + 1, 'R:', false);
        }
    }

    /* callback to make the tree changes  */

    // Public method to insert a key
    insert(key) {
        const newNode = new this.Node(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    inOrderTraversal = (callBack) => {
        this.inOrderTraverseNode(this.root, callBack);
    }

    // Public method to search a key    

    preOrderTraverse = (callBack) => {
        this.preOrderTraversalNode(this.root, callBack);
    }

    // Public method to search a key

    postOrderTraverse = (callBack) => {
        this.postOrderTraversalNode(this.root, callBack);
    }

    // Public method to search a key

    min = () => {
        return this.minNode(this.root);
    }

    // Public method to search a key

    max = () => {
        return this.maxNode(this.root);
    }

    // Public method to search a key

    search = (key) => {
        return this.searchNode(this.root, key);
    }

    // Public method to search a key

    findMinNode = (node) => {
        if (node.left === null) {
            return node;
        } else {
            return this.findMinNode(node.left);
        }
    }

    // Public method to remove a key

    remove = (key) => {
        this.root = this.removeNode(this.root, key);
    }

    // Public method to print a key

    printTree = () => {
        console.log(this.root);
    }

    // Public method to print a key
    
    printTreeComplete() {
        this.printTreeGraphical(this.root);
    }

}

// Example usage
let tree = new BinarySearchTree();

tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(40);
tree.insert(68);
tree.insert(90);

// console.log(tree.search(13) ? "Key 13 found." : "Key 13 not found.");
// console.log(tree.search(130) ? "Key 130 found." : "Key 130 not found.");

// tree.printTreeComplete();

// tree.inOrderTraversal(tree.printNode);
// tree.preOrderTraverse(tree.printNode);
// tree.postOrderTraverse(tree.printNode);

// console.log('Min: ', tree.min());
// console.log('Max: ', tree.max());
// console.log('Search: ', tree.search(7));

// tree.remove(7);
// console.log('Search:', tree.search(7));