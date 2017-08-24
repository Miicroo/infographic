class WordCloudItem {
	
	constructor(word, weight) {
		this.word = word || '';
		this.weight = weight || 0;
	}

	getWord() {
		return this.word;
	}

	getWeight() {
		return this.weight;
	}

	static fromObject(obj, objToWord, objToWeight) {
		return new WordCloudItem(objToWord(obj), objToWeight(obj));
	}
}