class TopList extends TypedList {
	
	constructor(topListItemArray) {
		super(topListItemArray, "TopListItem");
	}

	toArray() {
		return super.toArray().sort((item,item2) => item2.compareTo(item));
	}
}