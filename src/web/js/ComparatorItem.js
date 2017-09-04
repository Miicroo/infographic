class ComparatorItem {
	constructor(compareWord, numberOfItems, topListByKey) {
		this.compareWord = compareWord || '';
		this.numberOfItems = numberOfItems || 0;
		this.topListByKey = topListByKey || [];
	}

	getCompareWord() {
		return this.compareWord;
	}

	getNumberOfItems() {
		return this.numberOfItems;
	}

	getTopListKeys() {
		return this.topListByKey.map(item => item.key);
	}

	getTopListByKey(key) {
		return this.topListByKey.find(item => item.key === key).topArray;
	}
}