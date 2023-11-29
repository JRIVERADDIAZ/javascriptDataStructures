class TreeNode {
    constructor(key) {
        this.key = key;
        this.height = 1;
        this.left = null;
        this.right = null;
    }
}

class AVLTree {
    constructor() {
        this.root = null;
    }

    // Helper function to get the height of a node
    getHeight(node) {
        return node ? node.height : 0;
    }

    // Helper function to update the height of a node based on its children
    updateHeight(node) {
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    // Perform left rotation (LL rotation)
    rotateLL(node) {
        const newRoot = node.left;
        node.left = newRoot.right;
        newRoot.right = node;

        // Update heights
        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    // Perform right rotation (RR rotation)
    rotateRR(node) {
        const newRoot = node.right;
        node.right = newRoot.left;
        newRoot.left = node;

        // Update heights
        this.updateHeight(node);
        this.updateHeight(newRoot);

        return newRoot;
    }

    // Perform left-right rotation (LR rotation)
    rotateLR(node) {
        node.left = this.rotateRR(node.left);
        return this.rotateLL(node);
    }

    // Perform right-left rotation (RL rotation)
    rotateRL(node) {
        node.right = this.rotateLL(node.right);
        return this.rotateRR(node);
    }

    // Balance a node after insertion
    balance(node) {
        // Calculate the balance factor
        const balanceFactor = this.getHeight(node.left) - this.getHeight(node.right);

        // Left Heavy (LL or LR rotation)
        if (balanceFactor > 1) {
            // Left-Left (LL) rotation
            if (this.getHeight(node.left.left) >= this.getHeight(node.left.right)) {
                return this.rotateLL(node);
            }
            // Left-Right (LR) rotation
            else {
                return this.rotateLR(node);
            }
        }

        // Right Heavy (RR or RL rotation)
        if (balanceFactor < -1) {
            // Right-Right (RR) rotation
            if (this.getHeight(node.right.right) >= this.getHeight(node.right.left)) {
                return this.rotateRR(node);
            }
            // Right-Left (RL) rotation
            else {
                return this.rotateRL(node);
            }
        }

        // No rotation needed
        return node;
    }

    // Insert a key into the AVL tree
    insert(key, node = this.root) {
        if (!node) {
            return new TreeNode(key);
        }

        if (key < node.key) {
            node.left = this.insert(key, node.left);
        } else if (key > node.key) {
            node.right = this.insert(key, node.right);
        } else {
            // Duplicate keys are not allowed in AVL trees
            return node;
        }

        // Update height and balance the current node
        this.updateHeight(node);
        return this.balance(node);
    }

    printTree(node = this.root, level = 0, prefix = 'Root') {
        if (node) {
            console.log(`${'  '.repeat(level)}${prefix}(${node.key})`);

            this.printTree(node.left, level + 1, 'L');
            this.printTree(node.right, level + 1, 'R');
        }
    }

}

// Example Usage:
const avlTree = new AVLTree();
avlTree.root = avlTree.insert(10);
avlTree.root = avlTree.insert(20);
avlTree.root = avlTree.insert(5);
avlTree.root = avlTree.insert(30);
avlTree.root = avlTree.insert(15);
avlTree.root = avlTree.insert(25);

avlTree.printTree();