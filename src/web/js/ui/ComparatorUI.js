class ComparatorUI {
	constructor() {

	}

	renderAsDOMObject(s1, s2) {
		const comparator = new Comparator(new ObjectArray(dataset));
		const comparatorItems = comparator.compare(s1, s2);
		const container = document.createElement('div');

		const f1 = document.createElement('div');
		f1.style.cssFloat = 'left';
		f1.style.width = '50%';

		const f2 = document.createElement('div');
		f2.style.cssFloat = 'right';
		f2.style.width = '50%';

		this._render(comparatorItems[0], f1);
		this._render(comparatorItems[1], f2);

		container.appendChild(f1);
		container.appendChild(f2);

		return container;
	}

	_render(item, container) {
		const countLabel = document.createElement('div');
		countLabel.innerHTML = `<b>Number of hits</b>: ${item.getNumberOfItems()}`;
		container.appendChild(countLabel);
		container.appendChild(document.createElement('br'));

		const topListKeys = item.getTopListKeys();
		topListKeys.forEach(key => {
			const header = document.createElement('h4');
			header.innerText = `Most common ${key}s`;
			container.appendChild(header);
			const tableUI = new ComparatorTableUI(item.getCompareWord(), item.getTopListByKey(key));
			container.appendChild(tableUI.renderAsDOMObject());
		});
	}
}