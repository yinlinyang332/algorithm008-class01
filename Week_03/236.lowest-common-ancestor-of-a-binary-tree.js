/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
	var ans = null
	var recurseTree = function (currentNode, p, q) {
		if (currentNode == null || ans) {
			return false
		}

		var left = recurseTree(currentNode.left, p, q)
		var right = recurseTree(currentNode.right, p, q)
		var mid = currentNode === p || currentNode === q

		if ((left && mid) || (right && mid) || (left && right)) {
			ans = currentNode
		}

		return left || right || mid
	}

	recurseTree(root, p, q)
	return ans
}
