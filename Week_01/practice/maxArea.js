/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
	var i = 0
	var j = height.length - 1
	var area = 0
	
	while (i < j) {
		area = Math.max((j - i) * Math.min(height[i], height[j]), area)
		height[i] < height[j] ? i++ : j--
	}

	return area
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]))
