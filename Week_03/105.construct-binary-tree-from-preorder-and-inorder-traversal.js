/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  if (!inorder.length) return null
  // 根
  var rootVal = preorder[0]
  // 根在中续中的位置
  var rootIndex = inorder.indexOf(rootVal)
  var root = new TreeNode(rootVal)

	root.left = buildTree(preorder.slice(1, rootIndex + 1), inorder.slice(0, rootIndex))
	root.right = buildTree(preorder.slice(rootIndex + 1), inorder.slice(rootIndex + 1))

	return root
}
