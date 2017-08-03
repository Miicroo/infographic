describe("ObjectArrayFilter", function() {

  describe("when filtering by key", function() {
    it("should return undefined when input array is undefined", function() {
      const filter = new ObjectArrayFilter(undefined);

      const filteredList = filter.filterByKey('anyrandomkey');
      expect(filteredList).not.toBeDefined();
    });

    it("should return an empty array when input array is empty", function() {
      const emptyList = [];
      const filter = new ObjectArrayFilter(emptyList);

      const filteredList = filter.filterByKey('anyrandomkey');
      expect(filteredList).toEqual(emptyList);
    });

    it("should return an empty array when no matching key was found", function() {
      const data = [{}, {}, {}];
      const filter = new ObjectArrayFilter(data);

      const filteredList = filter.filterByKey('anyrandomkey');
      expect(filteredList).toEqual([]);
    });

    it("should return the correct number of fully matching keys", function() {
      const filterWord = 'mykey';
      const data = [{'mykey': 1}, {'mykey': 2}, {'yourkey': '0'}];
      const filter = new ObjectArrayFilter(data);

      const filteredList = filter.filterByKey(filterWord);
      expect(filteredList.length).toEqual(2);

      const objValues = filteredList.map(obj => obj[filterWord]);
      expect(objValues).toContain(1);
      expect(objValues).toContain(2);
    });


    it("should return the correct number of partially matching keys", function() {
      const filterWord = 'mykey';
      const data = [{'mykeyq': 1}, {'asmykey': 2}, {'amykeyklaksl': 53}, {'yourkey': '0'}];
      const filter = new ObjectArrayFilter(data);

      const filteredList = filter.filterByKey(filterWord);
      expect(filteredList.length).toEqual(3);

      const partialObjValueStr = filteredList.reduce((str, obj) => str + Object.keys(obj).map(key => obj[key]) + ',', '');
      expect(partialObjValueStr).toContain('1');
      expect(partialObjValueStr).toContain('2');
      expect(partialObjValueStr).toContain('53');
    });
  });

  describe("when filtering by value", function() {
    it("should return undefined when input array is undefined", function() {
      const filter = new ObjectArrayFilter(undefined);

      const filteredList = filter.filterByValue('anyrandomkey');
      expect(filteredList).not.toBeDefined();
    });

    it("should return an empty array when input array is empty", function() {
      const emptyList = [];
      const filter = new ObjectArrayFilter(emptyList);

      const filteredList = filter.filterByValue('anyrandomkey');
      expect(filteredList).toEqual(emptyList);
    });

    it("should return an empty array when no matching value was found", function() {
      const data = [{}, {}, {}];
      const filter = new ObjectArrayFilter(data);

      const filteredList = filter.filterByValue('anyrandomkey');
      expect(filteredList).toEqual([]);
    });

    it("should return the correct number of fully matching values", function() {
      const filterWord = 'myvalue';
      const key = 'key';
      const data = [{'key': filterWord}, {'key': filterWord}, {'key': '0'}];
      const filter = new ObjectArrayFilter(data);

      const filteredList = filter.filterByValue(filterWord);
      expect(filteredList.length).toEqual(2);
    });

    it("should return the correct number of partially matching values", function() {
      const filterWord = '1';
      const key = 'key';
      const data = [{'key': 1}, {'key': filterWord}, {'key': 'a'+filterWord}, {'key': filterWord+'0'}, {'key': 'a'+filterWord+'b'}, {'key': 'öä'}];
      const filter = new ObjectArrayFilter(data);

      const filteredList = filter.filterByValue(filterWord);
      expect(filteredList.length).toEqual(5);

      const partialObjValueStr = filteredList.reduce((str, obj) => str + Object.keys(obj).map(key => obj[key]) + ',', '');

      expect(partialObjValueStr).toContain('1');
      expect(partialObjValueStr).toContain(filterWord);
      expect(partialObjValueStr).toContain('a'+filterWord);
      expect(partialObjValueStr).toContain(filterWord+'0');
      expect(partialObjValueStr).toContain('a'+filterWord+'b');
    });
  });
});
