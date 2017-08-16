describe("TopList", function() {

	it("should return an empty array when input is undefined", function() {
		const topList = new TopList(undefined);

		const topListArray = topList.toArray();
	  	expect(topListArray).toEqual([]);
	});

	it("should return an empty array when input array is empty", function() {
		const topList = new TopList([]);

	  	const topListArray = topList.toArray();
	  	expect(topListArray).toEqual([]);
	});

	it("should return an array of n TopListItems when input array is an array of n TopListItems", function() {
		const input = [(new TopListItem('Adam', 5)), (new TopListItem('Kalle', 2)), (new TopListItem('Eva', 7))];
		const list = new TopList(input);
		expect(list.toArray().length).toEqual(3);
	});

	it("should return a sorted array when input array is valid", function() {
		const input = [(new TopListItem('Kalle', 5)), (new TopListItem('Elias', 3)), (new TopListItem('Anna', 7))];
		const topList = new TopList(input);

		const topListArray = topList.toArray();
		expect(topListArray.length).toEqual(3);
		expect(topListArray[0]).toEqual(input[2]);
		expect(topListArray[1]).toEqual(input[0]);
		expect(topListArray[2]).toEqual(input[1]);
	});

	it("should throw an error when one or more items are not of type TopListItem", function() {
		expect(function() {
			const input = [(new TopListItem('Adam', 5)), (new TopListItem('Kalle', 2)), 7];
			const list = new TopList(input);
		}).toThrowError(`List contains items that are not of type TopListItem`);
	});
});
