class TopListUI {

	constructor(objectArray) {
		this.currentFilter = '';
		const validObjectArray = objectArray && objectArray.asArray().length > 0;
		this.dataset = validObjectArray ? objectArray.asArray() : [];
		this.datasetKeys = validObjectArray ? objectArray.keys() : [];
		this.datasetKeys = this.datasetKeys.map(k => k.charAt(0).toUpperCase() + k.substring(1));
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
		this._createTopListTableUI();
		

		this.topListContainer.innerHTML = '';
		this.topListContainer.appendChild(keySelectorUI.renderAsDOMObject());
		this.topListContainer.appendChild(filterUI.renderAsDOMObject());
		this.topListContainer.appendChild(this.topListTableUIDiv);
	}

	_createTopListTableUI() {
		const topList = this._createTopList();
		
		const topListTableUI = new TopListTableUI(topList);
		topListTableUI.setDescriptionHeader(this.currentKey);
		topListTableUI.setCountHeader('Count');

		this.topListTableUIDiv = this.topListTableUIDiv || document.createElement('div');
		this.topListTableUIDiv.innerHTML = '';
		this.topListTableUIDiv.appendChild(topListTableUI.renderAsDOMObject());
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
		this._createTopListTableUI();
	}

	_createFilterUI() {
		const filterUI = new FilterInputUI('topListFilterUpdated');
		filterUI.addEventListener(e => this._filterTopListTableUI(e.detail), false);
		return filterUI;
	}

	_filterTopListTableUI(filter) {
		this.currentFilter = filter;
		this._createTopListTableUI();
	}
}