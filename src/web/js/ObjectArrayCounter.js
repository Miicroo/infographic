class ObjectArrayCounter {

	constructor(array) {
		this.array = array || [];
	}

	count(idFunction) {
		let countStats = this.array.reduce((countStats, object) => {
			let objectIdentifier = idFunction(object);
	        if (countStats.hasOwnProperty(objectIdentifier)) {
	            countStats[objectIdentifier] = countStats[objectIdentifier] + 1;
	        } else {
	            countStats[objectIdentifier] = 1;
	        }
	        return countStats;
	    }, {});

	    return Object.keys(countStats).map(key => {return {'key': key, 'count':countStats[key]}; });
	}
}