


// 方法1 

var rotate = function (nums, k) {
  nums.unshift(...nums.splice(nums.length - k))
  return nums
}


var reverse = function (nums, start, end) {
	while (start < end) {
		var temp = nums[end]
		nums[end] = nums[start]
		nums[start] = temp
		start++
		end--
	}
}

// 方法2
var rotate2 = function (nums, k) {
	k = k % nums.length
	reverse(nums, 0, nums.length - 1)
	reverse(nums, 0, k - 1)
	reverse(nums, k, nums.length - 1)
}


// ---------------------

var rotate3 = function (nums, k) {
	for (var i = 0; i < k; i++) {
		var target = nums.pop()
		nums.unshift(target)
	}
}
