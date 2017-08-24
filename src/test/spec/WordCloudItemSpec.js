describe("WordCloudItem", function() {
	it("should return word as an empty string when word is undefined", function() {
		const item = new WordCloudItem(undefined, 13);
		expect(item.getWord()).toEqual('');
	});

	it("should return the word when word is defined", function() {
		const word = 'MyWord';
		const item = new WordCloudItem(word, 13);
		expect(item.getWord()).toEqual(word);
	});

	it("should return a weight of 0 when weight is undefined", function() {
		const item = new WordCloudItem('MyWord', undefined);
		expect(item.getWeight()).toEqual(0);
	});

	it("should return the weight when weight is defined", function() {
		const weight = 12;
		const item = new WordCloudItem('MyWord', weight);
		expect(item.getWeight()).toEqual(weight);
	});

	it("should convert an object to a WordCloudItem", function() {
		const myObject = {'name': 'Kalle', 'age': 14, 'score': 600};
		const item = WordCloudItem.fromObject(myObject, o => o.name, o => o.age);
		
		expect(item.constructor.name).toEqual('WordCloudItem');
		expect(item.getWord()).toEqual('Kalle');
		expect(item.getWeight()).toEqual(14);
	});
});