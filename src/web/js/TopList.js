class TopList {
	
	constructor(topListArray) {
		this.topListArray = topListArray || new TopListItemList([]);
	}

	toArray() {
		TopList._throwExceptionIfMissingKey(this.topListArray, 'description');
		TopList._throwExceptionIfMissingKey(this.topListArray, 'count');

		return this.topListArray.sort((a,b) => b.count-a.count);
	}

	static _throwExceptionIfMissingKey(array, key) {
		const indexOfMissingKey = array.findIndex(obj => !obj.hasOwnProperty(key));
		if(indexOfMissingKey !== -1) {
			throw Error(`Object at index ${indexOfMissingKey} is missing key '${key}'`);
		}
	}

	static fromObjectArray(array, descriptionKey, countKey) {
		array = this._createArrayIfUndefined(array);
		const topListArray = this._convertArrayToTopListArray(array, descriptionKey, countKey);
		return new TopList(topListArray);
	}

	static _createArrayIfUndefined(array) {
		return array || [];
	}

	static _convertArrayToTopListArray(array, descriptionKey, countKey) {
		this._throwExceptionIfMissingKey(array, descriptionKey);
		this._throwExceptionIfMissingKey(array, countKey);

		return this._convertToTopListFormat(array, descriptionKey, countKey);
	}

	static _convertToTopListFormat(array, descriptionKey, countKey) {
		return array.map(obj => {return {'description': obj[descriptionKey], 'count': obj[countKey]}; });
	}
}