describe("WordCloudItemList", function() {

	it("should return an empty array when input is undefined", function() {
		const wordCloudItemList = new WordCloudItemList(undefined);

		const wordCloudItemListArray = wordCloudItemList.toWordCloudArray();
	  	expect(wordCloudItemListArray).toEqual([]);
	});

	it("should return an empty array when input array is empty", function() {
		const wordCloudItemList = new WordCloudItemList([]);

	  	const wordCloudItemListArray = wordCloudItemList.toWordCloudArray();
	  	expect(wordCloudItemListArray).toEqual([]);
	});

	it("should return an array of n WordCloudItems when input array is an array of n WordCloudItems", function() {
		const input = [(new WordCloudItem('Adam', 5)), (new WordCloudItem('Kalle', 2)), (new WordCloudItem('Eva', 7))];
		const list = new WordCloudItemList(input);
		expect(list.toWordCloudArray().length).toEqual(3);
	});

	it("should throw an error when one or more items are not of type WordCloudItem", function() {
		expect(function() {
			const input = [(new WordCloudItem('Adam', 5)), (new WordCloudItem('Kalle', 2)), 7];
			const list = new WordCloudItemList(input);
		}).toThrowError(`List contains items that are not of type WordCloudItem`);
	});
});
