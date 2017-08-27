class ObjectArray {
	constructor(array) {
		this.array = array || [];
		this._throwErrorIfArrayContainsNonObjects(this.array);
	}

	_throwErrorIfArrayContainsNonObjects(array) {
		array.forEach(obj => {
			if(typeof obj !== 'object') {
				thrw new new Error(`Error: ${obj} is not an object!`);
			}
		});
	}

	asArray() {
		return this.array.splice(0);
	}

	keys() {
		const nonUniqueKeys = this.array.map(o => Object.keys(o));
		console.log(nonUniqueKeys);
	}
}