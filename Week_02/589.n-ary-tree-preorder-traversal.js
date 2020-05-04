/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
	var res = []
	function helper(node) {
		if (node) {
			res.push(node.val)
			for (var i = 0; i < node.children.length; i++) {
				helper(node.children[i])
			}
		}
	}

	helper(root)
	return res
}
