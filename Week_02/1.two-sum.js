/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
	var map = new Map()

	for (var i = 0; i < nums.length; i++) {
		var complement = target - nums[i]

		if (map.has(complement)) {
			return [map.get(complement), i]
		}

		map.set(nums[i], i)
	}

	return null
}


twoSum([2,7,11,15], 9)