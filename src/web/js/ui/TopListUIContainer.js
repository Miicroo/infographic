class TopListUIContainer {

	constructor(array) {
		this.currentFilter = '';
		this.dataset = array || [];
		this.datasetKeys = Object.keys(this.dataset[0]).sort().map(x => x.charAt(0).toUpperCase() + x.substring(1));
		this.currentKey = this.datasetKeys[0];

		this._createComponents();
	}

	renderAsDOMObject() {
		return this.topListContainer;
	}

	_createComponents() {
		this.topListContainer = document.createElement('div');

		const keySelectorUI = this._createKeySelectorUI();
		const filterUI = this._createFilterUI();
		this._createTopListUI();
		

		this.topListContainer.innerHTML = '';
		this.topListContainer.appendChild(keySelectorUI.renderAsDOMObject());
		this.topListContainer.appendChild(filterUI.renderAsDOMObject());
		this.topListContainer.appendChild(this.topListUIDiv);
	}

	_createTopListUI() {
		const topList = this._createTopList();
		
		const topListUI = new TopListUI(topList);
		topListUI.setDescriptionHeader(this.currentKey);
		topListUI.setCountHeader('Count');

		this.topListUIDiv = this.topListUIDiv || document.createElement('div');
		this.topListUIDiv.innerHTML = '';
		this.topListUIDiv.appendChild(topListUI.renderAsDOMObject());
	}

	_createTopList() {
		const filter = new ObjectArrayFilter(this.dataset);
		const filteredDataset = filter.filterByValue(this.currentFilter);

		const counter = new ObjectArrayCounter(filteredDataset);
		const countArray = counter.count(x => x[this.currentKey.toLowerCase()]);
		const topListItemArray = countArray.map(obj => TopListItem.fromObject(obj, o => o.key, o => o.count));

		return new TopList(topListItemArray);
	}

	_createKeySelectorUI() {
		const keySelectorUI = new DropDownSelectorUI(this.datasetKeys, 'topListKeyChanged');
		keySelectorUI.addEventListener(e => this._changeTopListKey(e.detail), false);
		return keySelectorUI;
	}

	_changeTopListKey(newKey) {
		this.currentKey = newKey;
		this._createTopListUI();
	}

	_createFilterUI() {
		const filterUI = new FilterInputUI('topListFilterUpdated');
		filterUI.addEventListener(e => this._filterTopListUI(e.detail), false);
		return filterUI;
	}

	_filterTopListUI(filter) {
		this.currentFilter = filter;
		this._createTopListUI();
	}
}