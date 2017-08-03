describe("ObjectArrayCounter", function() {
	it("should return an empty array when input array is undefined", function() {
      const counter = new ObjectArrayCounter(undefined);

      const returnArray = counter.count(x => x);
      expect(returnArray).toEqual([]);
    });

    it("should return an empty array when input array is empty", function() {
      const emptyList = [];
      const counter = new ObjectArrayCounter(emptyList);

      const returnArray = counter.count(x => x);
      expect(returnArray).toEqual(emptyList);
    });

    it("should return an array containing the count per id when data is present", function() {
      const data = [{'name': 'Kalle', 'address': 'Some street'}, {'name': 'Anna', 'address': 'Some street'}, {'name': 'Kalle', 'address': 'Some other street'}, {'name': 'Kalle', 'address': 'Some street'}];
      const counter = new ObjectArrayCounter(data);

      const returnArray = counter.count(x => x.name);
      expect(returnArray.length).toEqual(2);
      expect(returnArray).toContain({'key': 'Anna', 'count': 1});
      expect(returnArray).toContain({'key': 'Kalle', 'count': 3});
    });
});