class TopListUIContainer {

	constructor(array) {
		this.filter = '';
		this.dataset = array || [];
		this.datasetKeys = Object.keys(this.dataset[0]).sort().map(x => x.charAt(0).toUpperCase() + x.substring(1));

		this._createComponents();
	}

	renderAsDOMObject() {
		return this.topListContainer;
	}

	_createComponents() {
		this.topListContainer = document.createElement('div');

		this._createTopListUI(this.datasetKeys[0]);

		const filterUI = new FilterInputUI('topListFilterUpdated');
		filterUI.addEventListener(e => this._filterTopListUI(e.detail), false);				
		const filterUIDiv = document.createElement('div');
		filterUIDiv.appendChild(filterUI.renderAsDOMObject());

		const keySelectorUI = new DropDownSelectorUI(this.datasetKeys, 'topListKeyChanged');
		keySelectorUI.addEventListener(e => this._changeTopListKey(e.detail), false);

		this.topListContainer.innerHTML = '';
		this.topListContainer.appendChild(keySelectorUI.renderAsDOMObject());
		this.topListContainer.appendChild(filterUIDiv);
		this.topListContainer.appendChild(this.topListUIDiv);
	}

	_createTopListUI(key) {
		const topList = this._createTopList(key);
		
		this.topListUI = new TopListUI(topList);
		this.topListUI.setDescriptionHeader(key);
		this.topListUI.setCountHeader('Count');
		this.topListUI.setFilter(this.filter);

		this.topListUIDiv = this.topListUIDiv || document.createElement('div');
		this.topListUIDiv.innerHTML = '';
		this.topListUIDiv.appendChild(this.topListUI.renderAsDOMObject());
	}

	_createTopList(key) {
		const counter = new ObjectArrayCounter(dataset);
		const countArray = counter.count(x => x[key.toLowerCase()]);
		const topListItemArray = countArray.map(obj => TopListItem.fromObject(obj, o => o.key, o => o.count));
		return new TopList(topListItemArray);
	}

	_filterTopListUI(filter) {
		this.filter = filter;
		this.topListUI.setFilter(filter);
		this.topListUIDiv.innerHTML = '';
		this.topListUIDiv.appendChild(this.topListUI.renderAsDOMObject());
	}

	_changeTopListKey(newKey) {
		this._createTopListUI(newKey);
	}
}