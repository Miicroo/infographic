class WordCloudUI {
	constructor(wordCloudItemList) {
		this.wordCloudItemList = wordCloudItemList;

		this._createComponents();
	}

	renderAsDOMObject() {
		return this.container;
	}

	_createComponents() {
		this.container = document.createElement('div');

		const canvas = document.createElement('canvas');
		canvas.width = 1000;
		canvas.height = 600;
		canvas.id = 'wordCloudCanvas';
		canvas.style.border = "thick solid #0000FF";

		this.wordCloud = WordCloud(canvas, {list: this.wordCloudItemList.toWordCloudArray()});

		this.container.appendChild(canvas);
	}
}