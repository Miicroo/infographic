class DropDownSelectorUI {

	constructor(selectableItems, eventTypeToFireOnChange) {
		this.selectableItems = selectableItems || [];
		this.eventTypeToFireOnChange = eventTypeToFireOnChange;

		this._createUIComponents();
	}
	
	renderAsDOMObject() {
		return this.dropDownContainer;
	}

	addEventListener(callback, capture) {
		document.addEventListener(this.eventTypeToFireOnChange, callback, capture);
	}

	removeEventListener(callback, capture) {
		document.removeEventListener(this.eventTypeToFireOnChange, callback, capture);
	}

	_createUIComponents() {
		this.dropDownContainer = document.createElement('div');

		this.dropDownInput = document.createElement('select');
		this.dropDownInput.classList.add('form-control');
		this.dropDownInput.id = 'dropDownInput';
		this.dropDownInput.addEventListener('change', e => this._fireEvent(this.dropDownInput.options[this.dropDownInput.selectedIndex].value), false);

		this.selectableItems.forEach(item => {
			const optionNode = document.createElement('option');
			optionNode.setAttribute('value', item);
			optionNode.innerText = item;

			this.dropDownInput.appendChild(optionNode);
		});

		this.dropDownContainer.appendChild(this.dropDownInput);
	}

	_fireEvent(eventData) {
		const event = new CustomEvent(this.eventTypeToFireOnChange, {detail: eventData});
		document.dispatchEvent(event);
	}
}