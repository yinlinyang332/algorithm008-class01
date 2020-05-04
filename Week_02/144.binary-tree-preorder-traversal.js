/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
	var resutl = []
	var stack = []

	while (root !== null || stack.length > 0) {
		if (root !== null) {
			resutl.push(root.val)
			stack.push(root)
			root = root.left
		} else {
			var temp = stack.pop()
			root = temp.right
		}
	}

	return resutl
}
