class TopListItem {
	
	constructor(description, score) {
		this.description = description || '';
		this.score = score || 0;
	}

	getDescription() {
		return this.description;
	}

	getScore() {
		return this.score;
	}

	compareTo(otherItem) {
		if(!otherItem) {
			return 1;
		}

		return this.score - otherItem.score;
	}

	static fromObject(obj, objToDescription, objToScore) {
		return new TopListItem(objToDescription(obj), objToScore(obj));
	}
}