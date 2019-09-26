// https://gist.github.com/nhsz/d7fbd466ab86ada2c863fdb05dd30101

const oddNumberGenerator = num => {
	const result = [];
	for (let i = 1; i <= num; i++) {
		if (i % 2 === 0) {
			result.push(i);
		}
	}

	return result;
};
