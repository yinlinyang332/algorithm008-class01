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
var inorderTraversal = function (root) {
	var result = []
	var stack = []
	while (root !== null || stack.length > 0) {
		if (root !== null) {
			stack.push(root)
			root = root.left
		} else {
			var temp = stack.pop()
			result.push(temp.val)
			root = temp.right
		}
	}

	return result
}
