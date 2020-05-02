function BinarySearchTree() {
	var root = null

	this.insert = function (key) {
		var node = new treeNode(key)

		if (!root) {
			root = node
			return
		}

		insertNode(root, node)
	}

	this.max = function () {
		var max = null
		var node = root
		while (node) {
			max = node.key
			node = node.right
		}
		return max
	}

	this.min = function () {
		var min = null
		var node = root
		while (node) {
			min = node.key
			node = node.left
		}

		return min
	}

	this.search = function (key) {
		return searchNode(root, key)
	}

	this.inorderTravers = function (callback) {
		inorderTraversNode(root, callback)
	}

	this.preOrderTravers = function (callback) {
		preOrderTraversNode(root, callback)
	}

	this.postOrderTravers = function (callback) {
		postOrderTraversNode(root, callback)
	}

	this.remove = function (key) {
		root = removeNode(root, key)
	}
}

function treeNode(key) {
	this.key = key
	this.left = null
	this.right = null
}

function insertNode(node, newNode) {
	if (newNode.key > node.key) {
		if (node.right === null) {
			node.right = newNode
		} else {
			insertNode(node.right, newNode)
		}
	} else {
		if (node.left === null) {
			node.left = newNode
		} else {
			insertNode(node.left, newNode)
		}
	}
}

function searchNode(node, key) {
	if (!node) return false

	if (key > node.key) {
		return searchNode(node.right, key)
	} else if (key < node.key) {
		return searchNode(node.left, key)
	} else {
		return true
	}
}

function inorderTraversNode(node, callback) {
	if (!node) return
	inorderTraversNode(node.left, callback)
	callback(node)
	inorderTraversNode(node.right, callback)
}

function preOrderTraversNode(node, callback) {
	if (!node) return
	callback(node)
	preOrderTraversNode(node.left, callback)
	preOrderTraversNode(node.right, callback)
}

function postOrderTraversNode(node, callback) {
	if (!node) return
	postOrderTraversNode(node.left, callback)
	postOrderTraversNode(node.right, callback)
	callback(node)
}

function removeNode(node, key) {
	if (!node) return

	if (key < node.key) {
		node.left = removeNode(node.left, key)
		return node
	} else if (key > node.key) {
		node.right = removeNode(node.right, key)
		return node
	} else {
		if (node.left === null && this.node.right === null) {
			node = null
			return node
		}
		if (node.left === null) {
			node = node.left
			return node
		}

		if (node.right === null) {
			node = node.right
			return node
		}

		var aux = minNode(node.right)
		node.key = aux.key
		node.right = removeNode(node.right, key)
		return node
	}
}

function minNode(node) {
	if (!node) return null
	var min = null

	while (node) {
		min = node
		node = node.left
	}

	return min
}

function printNode(node) {
	console.log(node.key)
}

var tree = new BinarySearchTree()
tree.insert(11)

tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

tree.insert(6)

tree.remove(3)

// tree.inorderTravers(printNode)
// tree.preOrderTravers(printNode)
// tree.inorderTravers(printNode)
tree.remove(15)
