class ObjectArray {
	constructor(array) {
		this.array = array || [];
		this._throwErrorIfArrayContainsNonObjects(this.array);
	}

	_throwErrorIfArrayContainsNonObjects(array) {
		array.forEach(obj => {
			if(typeof obj !== 'object') {
				throw new Error(`Error: ${obj} is not an object!`);
			}
		});
	}

	asArray() {
		return this.array.slice();
	}

	keys() {
		const uniqueKeys = this.array.reduce((keys, obj) => {
			Object.keys(obj).forEach(key => {
				if(keys.indexOf(key) === -1) {
					keys.push(key);
				}
			});
			return keys;
		}, []);

		return uniqueKeys;
	}
}