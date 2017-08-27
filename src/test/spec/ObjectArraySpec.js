describe("ObjectArray", function() {

	it("should be constructed from an array of objects", function() {
		const objs = [{'x':'s'}, {'someproperty':'somevalue', 'a':3}];
		const objArray = new ObjectArray(objs);
		expect(objArray.asArray()).toEqual(objs);
	});


	it("should throw an error if any item is not an object", function() {
		const objs = [{'x':'s'}, {'someproperty':'somevalue', 'a':3}, 5];
		
		expect(function() {
			const objArray = new ObjectArray(objs);
		}).toThrowError(`Error: 5 is not an object!`);
	});

	it("should return the unique set of keys from all objects", function() {
		const objs = [{'x':'s'}, {'someproperty':'somevalue', 'a':3}];
		const objArray = new ObjectArray(objs);
		const arrKeys = objArray.keys();
		expect(arrKeys).toEqual(['x','someproperty', 'a']);
	});
});