/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
	var results = []
	var target = 0
	if (nums.length < 3) return

	// 排序
	var numsSorted = nums.sort((a, b) => a - b)

	for (var k = 0; k < nums.length; k++) {
		var i = k + 1
		var j = numsSorted.length - 1

		if (numsSorted[k] > target) break
		if ( k > 0 && numsSorted[k] === numsSorted[k - 1]) continue

		while (i < j) {
			var sum = numsSorted[k] + numsSorted[i] + numsSorted[j]
			if (sum === target) {
				results.push([numsSorted[k], numsSorted[i], numsSorted[j]])
				
				while(numsSorted[i] === numsSorted[i + 1]) i++
				while(numsSorted[j] === numsSorted[j - 1]) j--

				i++
				j--
			} else if (sum > target) {
				j--
			} else {
				i++
			}
		}
	}

	return results
}
