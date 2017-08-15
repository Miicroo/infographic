describe("TopListItemList", function() {

	it("should return an empty array when input is undefined", function() {
		const list = new TopListItemList(undefined);
		expect(list.toArray()).toEqual([]);
	});

	it("should return an empty array when input is an empty array", function() {
		const list = new TopListItemList(undefined);
		expect(list.toArray()).toEqual([]);
	});

	it("should return the input array when all items are of type TopListItem", function() {
		const input = [(new TopListItem('Adam', 5)), (new TopListItem('Kalle', 2)), (new TopListItem('Eva', 7))];
		const list = new TopListItemList(input);
		expect(list.toArray().length).toEqual(3);
	});

	it("should throw an error when one or more items are not of type TopListItem", function() {
		expect(function() {
			const input = [(new TopListItem('Adam', 5)), (new TopListItem('Kalle', 2)), 7];
			const list = new TopListItemList(input);
		}).toThrowError(`List contains items that are not of type TopListItem`);
	});
});