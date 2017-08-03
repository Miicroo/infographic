class FilterInputUI {
	
	constructor(eventTypeToFireOnChange) {
		this.filter = '';
		this.eventTypeToFireOnChange = eventTypeToFireOnChange;

		this._createUIComponents();
	}

	renderAsDOMObject() {
		return this.filterInputContainer;
	}

	addEventListener(callback, capture) {
		document.addEventListener(this.eventTypeToFireOnChange, callback, capture);
	}

	removeEventListener(callback, capture) {
		document.removeEventListener(this.eventTypeToFireOnChange, callback, capture);
	}

	_createUIComponents() {
		this.filterInputContainer = document.createElement('div');

		this.labelNode = document.createElement('label');
		this.labelNode.setAttribute('for', 'filterInput');
		this.labelNode.appendChild(document.createTextNode('Filter: '));

		this.filterInput = document.createElement('input');
		this.filterInput.type = 'text';
		this.filterInput.classList.add('form-control');
		this.filterInput.id = 'filterInput';
		this.filterInput.value = this.filter;
		this.filterInput.setAttribute('autofocus', 'autofocus');
		this.filterInput.addEventListener('keyup', e => this._fireEvent(this.filterInput.value), false);

		this.filterInputContainer.appendChild(this.labelNode);
		this.filterInputContainer.appendChild(this.filterInput);
	}

	_fireEvent(eventData) {
		const event = new CustomEvent(this.eventTypeToFireOnChange, {detail: eventData});
		document.dispatchEvent(event);
	}
}