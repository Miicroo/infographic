describe("TypedList", function() {

	it("should return an empty array when input is undefined", function() {
		const list = new TypedList(undefined, "SomeType");
		expect(list.toArray()).toEqual([]);
	});

	it("should return an empty array when input is an empty array", function() {
		const list = new TypedList([], "SomeType");
		expect(list.toArray()).toEqual([]);
	});

	it("should return the input array when all items in the input array are of the given type", function() {
		const list = new TypedList(["hello", "3", "world", "{}"], "String");
		expect(list.toArray().length).toEqual(4);
	});

	it("should throw an error when one or more items are not of the given type", function() {
		const listType = "String";
		expect(function() {
			const list = new TypedList(["hello", 3, "world", {}], listType);
		}).toThrowError(`List contains items that are not of type ${listType}`);
	});
});