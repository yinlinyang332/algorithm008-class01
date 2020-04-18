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

var climbStairs1 = function (n) {
	var memory = [1, 2]
	var i = 2
	while (n >= i) {
		memory[i] = memory[i - 1] + memory[i - 2]
		i++
	}

	return memory[n - 1]
}

var climbStairs = function (n) {
	if (n < 2) return n

	var f1 = 1
	var f2 = 2
	var f3 = 3

	var i = 3
	while ( i < n + 1) {
		f3 = f1 + f2
		f1 = f2
		f2 = f3

		i++
	}

	return f3
}
