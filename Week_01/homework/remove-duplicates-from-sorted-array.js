/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  
	var i = 1
	var j = 0
	var length = nums.length

	while (i < length) {
		if (nums[i] !== nums[j]) {
			j++
      nums[j] = nums[i]
		}
		i++
	}

	return j + 1
}
