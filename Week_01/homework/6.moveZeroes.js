/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
	var i = 0
	var j = 0

	while (i < nums.length) {
		if (nums[i] != 0) {
			nums[j++] = nums[i]
		}
		i++
	}

	while (j < nums.length) {
		nums[j++] = 0
	}

	return nums
}

var nums = [0, 1, 0, 3, 12]

console.log(moveZeroes(nums))
