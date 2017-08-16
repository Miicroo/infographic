describe("TopListItem", function() {

	it("should return description as an empty string when description is undefined", function() {
		const item = new TopListItem(undefined, 13);
		expect(item.getDescription()).toEqual('');
	});

	it("should return the description when description is defined", function() {
		const description = 'This is some description';
		const item = new TopListItem(description, 13);
		expect(item.getDescription()).toEqual(description);
	});

	it("should return a score of 0 when score is undefined", function() {
		const item = new TopListItem('This is some description', undefined);
		expect(item.getScore()).toEqual(0);
	});

	it("should return the score when score is defined", function() {
		const score = 12;
		const item = new TopListItem('This is some description', score);
		expect(item.getScore()).toEqual(score);
	});

	it("should specify an instance as larger if it is compared to undefined", function() {
		const item = new TopListItem('This is some description', 12);
		
		expect(item.compareTo(undefined)).toEqual(1);
	});

	it("should specify two instances as equal if their scores are equal", function() {
		const score = 12;
		const item = new TopListItem('This is some description', score);
		const item2 = new TopListItem('This is some description', score);

		expect(item.compareTo(item2)).toEqual(0);
		expect(item2.compareTo(item)).toEqual(0);
	});

	it("should specify an instance as larger if it's score is higher than another instance's score", function() {
		const largerItem = new TopListItem('This is some description', 12);
		const smallerItem = new TopListItem('This is some description', -10);
		
		expect(largerItem.compareTo(smallerItem)).toBeGreaterThan(0);
	});

	it("should specify an instance as smaller if it's score is lower than another instance's score", function() {
		const smallerItem = new TopListItem('This is some description', 10);
		const largerItem = new TopListItem('This is some description', 12);
		
		expect(smallerItem.compareTo(largerItem)).toBeLessThan(0);
	});

	it("should convert an object to a TopListItem", function() {
		const myObject = {'name': 'Kalle', 'age': 14, 'score': 600};
		const item = TopListItem.fromObject(myObject, o => o.name, o => o.age);
		
		expect(item.constructor.name).toEqual('TopListItem');
		expect(item.getDescription()).toEqual('Kalle');
		expect(item.getScore()).toEqual(14);
	});
});