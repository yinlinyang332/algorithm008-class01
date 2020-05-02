/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	var alphabet = []
	for (var i = 0; i < s.length; i++) {
		var index = s.charCodeAt(i) - 'a'.charCodeAt(0)
		alphabet[index] ? alphabet[index]++ : (alphabet[index] = 1)
	}

	for (var i = 0; i < t.length; i++) {
		var index = t.charCodeAt(i) - 'a'.charCodeAt(0)
		alphabet[index] ? alphabet[index]-- : (alphabet[index] = 1)
	}

	for (var i = 0; i < alphabet.length; i++) {
		if (alphabet[i]) return false
	}

	return true
}
