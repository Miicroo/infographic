class WordCloudItemList extends TypedList {
	
	constructor(wordCloudItemArray) {
		super(wordCloudItemArray, "WordCloudItem");
	}

	toWordCloudArray() {
		return super.toArray().map(wcItem => {return {'word': wcItem.getWord(), 'weight': wcItem.getWeight()};});
	}
}