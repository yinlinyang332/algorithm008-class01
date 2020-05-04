/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
	const map = new Map()
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			map.set(nums[i], map.get(nums[i]) + 1)
		} else {
			map.set(nums[i], 1)
		}
	}

	const list = []
	for (let [key, value] of map.entries()) {
		list.push({ key, value })
	}

	list.sort((a, b) => a.value - b.value)

	return list.slice(-k).map((item) => item.key)
}
