class TreeNode {
    constructor(username) {
        this.username = username;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insertUser(username) {
        this.root = this._insertUser(this.root, username);
    }

    _insertUser(root, username) {
        if (root === null) {
            return new TreeNode(username);
        }

        if (username < root.username) {
            root.left = this._insertUser(root.left, username);
        } else if (username > root.username) {
            root.right = this._insertUser(root.right, username);
        }

        return root;
    }

    searchUser(username) {
        return this._searchUser(this.root, username);
    }

    _searchUser(root, username) {
        if (root === null || root.username === username) {
            return root;
        }

        if (username < root.username) {
            return this._searchUser(root.left, username);
        }

        return this._searchUser(root.right, username);
    }

    displayNetwork() {
        console.log("Social Network Structure:");
        this._inOrderTraversal(this.root);
    }

    _inOrderTraversal(node) {
        if (node !== null) {
            this._inOrderTraversal(node.left);
            console.log(node.username);
            this._inOrderTraversal(node.right);
        }
    }
}

// Example usage:
const socialNetwork = new BinaryTree();

socialNetwork.insertUser("user1");
socialNetwork.insertUser("user2");
socialNetwork.insertUser("user3");

socialNetwork.displayNetwork();

const searchResult = socialNetwork.searchUser("user2");
if (searchResult) {
    console.log(`User found: ${searchResult.username}`);
} else {
    console.log("User not found");
}