class ComparatorTableUI {
	constructor(word, array) {
		this.word = word || '';
		this.array = array || [];

		const max = (5-this.array.length);
		for(let i = 0; i<max; i++) {
			this.array.push({'key':'\xa0', 'count':0});
		}
	}

	renderAsDOMObject() {
		const table = this._createTable();
		const header = this._createHeader();
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

	_createHeader() {
		const thead = document.createElement('thead');
		const row = document.createElement('tr');

		row.appendChild(this._createHeaderColumn(this.word));
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
		console.log(this.array);
		this.array.forEach((item, index) => {
			tableBody.appendChild(this._createTableBodyRow(index, item));
		});
	}

	_createTableBodyRow(topListIndex, item) {
		const row = document.createElement('tr');
		row.appendChild(this._createBodyColumn(item.key));

		return row;
	}

	_createBodyColumn(textContent) {
		return this._createColumnWithTagTypeAndText('td', textContent);
	}
}