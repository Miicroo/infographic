class TypedList {
	constructor(inputArray, type) {
		const initializedArray = inputArray || [];
		this.throwErrorIfAnyItemIsNotOfType(initializedArray, type);
		this.elements = initializedArray;
	}

	throwErrorIfAnyItemIsNotOfType(array, type) {
		const anyItemIsNotOfType = array.some(item => !item || item.constructor.name !== type);
		if(anyItemIsNotOfType) {
			throw new Error(`List contains items that are not of type ${type}`);
		}
	}

	toArray() {
		return this.elements;
	}
}