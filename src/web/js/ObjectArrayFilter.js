class ObjectArrayFilter {

	constructor(objectArray) {
		this.objectArray = objectArray;

		this._keysToStringTransposer = function(object) {
			return Object.keys(object).toString();
		}

		this._valuesToStringTransposer = function(object) {
			var values = [];
			for(var key in object) {
			    values.push(object[key]);
			}
			return values.toString();
		}
	}

	filterByKey(filterKey) {
		return this._filter(filterKey, this._keysToStringTransposer);
	}

	filterByValue(filterValue) {
		return this._filter(filterValue, this._valuesToStringTransposer);
	}

	_filter(filterString, objectToStringTransposerFunction) {
		if(this.objectArray === undefined) {
			return undefined;
		}

		return this.objectArray.filter(object => objectToStringTransposerFunction(object).indexOf(filterString) !== -1);
	}
}