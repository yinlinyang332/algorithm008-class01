/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
	var map = new Map()

	for (var i = 0; i < strs.length; i++) {
		var item = strs[i]
		var key = item.split('').sort().join('')
		if (map.has(key)) {
			var target = map.get(key)
			map.set(key, [...target, item])
		} else {
			map.set(key, [item])
		}
	}

	var resut = []
	for (var value of map.values()) {
		resut.push(value)
	}

	return resut
}

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
