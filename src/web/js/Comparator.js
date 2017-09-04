class Comparator {
	constructor(objectArray) {
		this.objectArray = objectArray || new ObjectArray([]);
	}

	compare(firstString, secondString) {
		return [this._getItem(firstString), this._getItem(secondString)];
	}

	_getItem(filter) {
		const myData = new ObjectArrayFilter(this.objectArray.asArray()).filterByValue(filter);
		return new ComparatorItem(filter, myData.length, this._getTopByKey(myData));
	}

	_getTopByKey(arr) {
		const anyObjectArray = new ObjectArray(arr);
		const keys = anyObjectArray.keys();
		const topListPerKey = keys.map(key => {
			const topFiveArray = new ObjectArrayCounter(arr)
									.count(o => o[key])
									.sort((a,b) => b.count-a.count)
									.slice(0,5);
			return {'key':key,'topArray':topFiveArray};
		});
		return topListPerKey;
	}

}