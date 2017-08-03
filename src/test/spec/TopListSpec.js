describe("TopList", function() {

	describe("when created through constructor", function() {
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

		it("should return a sorted array when data items are present", function() {
		  const data = [{'description': 'Kalle', 'count': 5}, {'description': 'Anna', 'count': 7}, {'description': 'Elias', 'count': 3}];
		  const topList = new TopList(data);

		  const topListArray = topList.toArray();
		  expect(topListArray.length).toEqual(3);
		  expect(topListArray[0]).toEqual({'description': 'Anna', 'count': 7});
		  expect(topListArray[1]).toEqual({'description': 'Kalle', 'count': 5});
		  expect(topListArray[2]).toEqual({'description': 'Elias', 'count': 3});
		});

		it("should throw an exception if an array object does not contain a key named 'description'", function() {
			const data = [{'description': 'Kalle', 'count': 5}, {'count': 7}];
		  	const topList = new TopList(data);
		    expect(function() {
	        	topList.toArray();
	      	}).toThrowError("Object at index 1 is missing key 'description'");
		});


		it("should throw an exception if an array object does not contain a key named 'count'", function() {
			const data = [{'description': 'Kalle', 'count': 5}, {'description': 'Björn', 'count': 7}, {'description': 'Anna'}];
		  	const topList = new TopList(data);
		    expect(function() {
	        	topList.toArray();
	      	}).toThrowError("Object at index 2 is missing key 'count'");
		});
	});

	describe("when created through factory method", function() {
		it("should return an empty array when input is undefined", function() {
		  const topList = TopList.fromObjectArray(undefined, 'myDescriptionKey', 'myCountKey');
		  const array = topList.toArray();
		  expect(array).toEqual([]);
		});

		it("should return an empty array when input array is empty", function() {
		  const topList = TopList.fromObjectArray([], 'myDescriptionKey', 'myCountKey');
		  const array = topList.toArray();
		  expect(array).toEqual([]);
		});

		it("should return an array with description and count when data items are present", function() {
		  const data = [{'name': 'Kalle', 'goals': 5, 'age': 13}, {'name': 'Anna', 'goals': 7}, {'name': 'Elias', 'goals': 3}];
		  const topList = TopList.fromObjectArray(data, 'name', 'goals');

		  const array = topList.toArray();
		  expect(array.length).toEqual(3);
		  expect(array).toContain({'description': 'Anna', 'count': 7});
		  expect(array).toContain({'description': 'Kalle', 'count': 5});
		  expect(array).toContain({'description': 'Elias', 'count': 3});
		});

		it("should throw an exception if description key is not defined for all items", function() {
			const data = [{'description': 'Kalle', 'count': 5}, {'count': 7}];
		    expect(function() {
		  		const topList = TopList.fromObjectArray(data, 'description', 'count');
	      	}).toThrowError("Object at index 1 is missing key 'description'");
		});


		it("should throw an exception if count key is not defined for all items", function() {
			const data = [{'description': 'Kalle', 'count': 5}, {'description': 'Björn', 'count': 7}, {'description': 'Anna'}];
		    expect(function() {
		  		const topList = TopList.fromObjectArray(data, 'description', 'count');
	      	}).toThrowError("Object at index 2 is missing key 'count'");
		});
	});
});
