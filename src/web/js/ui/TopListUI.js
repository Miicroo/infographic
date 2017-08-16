class TopListUI {

	constructor(topList) {
		this.topList = topList;
		this.filter = '';
	}

	renderAsDOMObject(descriptionHeader, countHeader) {
		return this._createTopListTable(descriptionHeader, countHeader);
	}

	setFilter(filter) {
		this.filter = filter;
	}

	_createTopListTable(descriptionHeader, countHeader) {
		const table = this._createTable();
		const header = this._createHeader(descriptionHeader, countHeader);
		const body = this._createTableBody();
		this._appendContentToTableBody(body);

		table.appendChild(header);
		table.appendChild(body);

		return table;
	}

	_createTable() {
		const table = document.createElement('table');
		table.classList.add('table');
		table.classList.add('table-striped');

		return table;
	}

	_createHeader(descriptionHeader, countHeader) {
		const thead = document.createElement('thead');
		const row = document.createElement('tr');

		row.appendChild(this._createHeaderColumn(''));
		row.appendChild(this._createHeaderColumn(descriptionHeader));
		row.appendChild(this._createHeaderColumn(countHeader));

		thead.appendChild(row);

		return thead;
	}

	_createHeaderColumn(textContent) {
		return this._createColumnWithTagTypeAndText('th', textContent);
	}

	_createColumnWithTagTypeAndText(columnType, textContent) {
		const column = document.createElement(columnType);
		const textNode = document.createTextNode(textContent);
		column.appendChild(textNode);

		return column;
	}

	_createTableBody() {
		return document.createElement('tbody');
	}

	_appendContentToTableBody(tableBody) {
		const topListAsArray = this._getTopListAsArray();
		topListAsArray.forEach((item, index) => {
			tableBody.appendChild(this._createTableBodyRow(index, item));
		});
	}

	_getTopListAsArray() {
		const array = this.topList.toArray();
		const filter = new ObjectArrayFilter(array);
		return filter.filterByValue(this.filter);
	}

	_createTableBodyRow(topListIndex, topListItem) {
		const row = document.createElement('tr');

		const topListIndexColumn = document.createElement('th');
		topListIndexColumn.setAttribute('scope', 'row');
		const topListIndexImage = this._getNodeForListIndex(topListIndex);
		topListIndexColumn.appendChild(topListIndexImage);

		row.appendChild(topListIndexColumn);
		row.appendChild(this._createBodyColumn(topListItem.getDescription()));
		row.appendChild(this._createBodyColumn(topListItem.getScore()));

		return row;
	}

	_getNodeForListIndex(index) {
		if(index > 2) {
			return document.createTextNode(`${index+1}`);
		} else {
			const images = ['gold.png', 'silver.png', 'bronze.png'];
			const img = document.createElement('img');
			img.src = `img/${images[index]}`;
			img.width = 16;
			img.height = 21;

			return img;
		}
	}

	_createBodyColumn(textContent) {
		return this._createColumnWithTagTypeAndText('td', textContent);
	}
}