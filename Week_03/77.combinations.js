/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	var result = []

	function helper(first, curr) {
		if (curr.length == k) {
			result.push(curr.slice(0))
			return
		}

		for (var i = first; i < n + 1; i++) {
			curr.push(i)
			helper(i + 1, curr)
			curr.pop()
		}
	}

	helper(1, [])

	return result
}
