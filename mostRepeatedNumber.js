// https://gist.github.com/nhsz/d7fbd466ab86ada2c863fdb05dd30101

const mostRepeatedNumber = arr => {
	const highestNumber = Math.max(...arr);
	let repetitions = 0;
	for (const e of arr) {
		if (e === highestNumber) {
			repetitions++;
		}
	}
	return repetitions;
};
