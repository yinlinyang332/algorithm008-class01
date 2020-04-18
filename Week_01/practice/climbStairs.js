/**
 * @param {number} n
 * @return {number}
 */
var memory = []
var climbStairs0 = function (n) {
	if (!n) return

	if (n === 1) {
		return 1
	}

	if (n === 2) {
		return 2
	}

	if (memory[n]) {
		return memory[n]
	}

	return (memory[n] = climbStairs(n - 1) + climbStairs(n - 2))
}

var climbStairs = function (n) {
	var memory = [1, 2]
	var i = 2
	while ( n >= i) {
		memory[i] = memory[i - 1] + memory[ i -2 ]
		i++
	}

	return memory[n - 1]
}
