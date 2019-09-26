const getUniqueElements = arr => {
	let result = [];
	let obj = arr.reduce((a, b) => {
		if (a.hasOwnProperty(String(b))) {
			a.b += 1;
		} else {
			a.b = 1;
		}
		return a;
	}, {});

	for (let e in obj) {
		if (obj[e] > 1) {
			result.push(obj[e]);
		}
	}

	return result;
};
