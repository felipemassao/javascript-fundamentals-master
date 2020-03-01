describe('Tests for forEach() function implementation', () => {
	it('should iterate over all array', () => {
		let arr = [ 1, 2, 3, 4, 5 ];
		let n = 0;
		const callback = () => n++;

		forEach(arr, callback);
		expect(n).toEqual(5);
	});

	it('should multiply by 2', () => {
		let arr = [ 1, 2, 3 ];
		const callback = (value, idx, self) => {
			self[idx] = value * 2;
		};

		forEach(arr, callback);
		expect(arr).toEqual([ 2, 4, 6 ]);
	});
});

describe('Tests for map() function implementation', () => {
	it('should return an array', () => {
		const arr = [ 1, 2 ];
		const callback = () => {};
		expect(typeof map(arr, callback)).toBe('object');
	});

	it('should not mutate the original array', () => {
		const arr = [ 1, 2 ];
		const callback = (value) => value;
		expect(map(arr, callback)).not.toBe(arr);
	});

	it('should return an array with the same length of the original', () => {
		const arr = [ 1, 2, 3 ];
		const callback = () => 1;
		expect(map(arr, callback).length).toBe(3);
	});

	it('should return an array with elements multiplied by 2', () => {
		const arr = [ 1, 2, 3 ];
		const callback = (value) => value * 2;
		expect(map(arr, callback)).toEqual([ 2, 4, 6 ]);
	});
});

describe('Tests for filter() function implementation', () => {
	it('should return an array', () => {
		const arr = [ 1, 2 ];
		const callback = () => true;
		expect(typeof filter(arr, callback)).toBe('object');
	});

	it('should not mutate the original array', () => {
		const arr = [ 1, 2 ];
		const callback = () => true;
		expect(filter(arr, callback)).not.toBe(arr);
	});

	it('should return an array with only even numbers', () => {
		const arr = [ 1, 2, 3, 4 ];
		const callback = (value) => value % 2 === 0;
		expect(filter(arr, callback)).toEqual([ 2, 4 ]);
	});

	it('should iterate over an object and return an array with 1s', () => {
		const obj = { a: 1, b: 0, c: 1, d: 2, e: 1 };
		const callback = (value) => value === 1;
		expect(filter(obj, callback)).toEqual([ 1, 1, 1 ]);
	});
});

describe('Tests for uniq() function implementation', () => {
	it('should return an array', () => {
		const arr = [ 1, 2 ];
		expect(typeof uniq(arr)).toBe('object');
	});

	it('should not mutate the original array', () => {
		const arr = [ 1, 2 ];
		expect(uniq(arr)).not.toBe(arr);
	});

	it('should not return an array with more than one 1', () => {
		const arr = [ 1, 1, 2, 3, 4, 1, 1, 5, 1 ];
		expect(uniq(arr)).toEqual([ 1, 2, 3, 4, 5 ]);
	});

	// it('should mantain the order of the array', () => {
	// 	const arr = [ 1, 2, 3, 4, 2, 2, 5, 2, 2, 6 ];
	// 	expect(uniq(arr)).toEqual([ 1, 2, 3, 4, 5, 6 ]);
	// });
});
