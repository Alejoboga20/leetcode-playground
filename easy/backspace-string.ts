const backspaceCompare = (s: string, t: string): boolean => {
	const stackS: string[] = [];
	const stackT: string[] = [];

	for (const char of s.split('')) {
		if (char === '#') {
			stackS.pop();
		} else {
			stackS.push(char);
		}
	}

	for (const char of t.split('')) {
		if (char === '#') {
			stackT.pop();
		} else {
			stackT.push(char);
		}
	}

	if (stackS.length !== stackT.length) return false;

	const result = stackS.every((char, index) => char === stackT[index]);

	return result;
};

console.log(backspaceCompare('ab#c', 'ad#c'));
console.log(backspaceCompare('ab##', 'c#d#'));
console.log(backspaceCompare('a#c', 'b'));
