import { element, browser, by } from 'protractor';

export class MainPO {
	constructor() {
		browser.get('http://localhost:4200');
	}

	async countNrOfGames() {
		let trs = element.all(by.css('table tbody tr'));
		return await trs.count();
	}

	enterTitle(title: string) {
		element(by.id('input-titel')).sendKeys(title);
	}
	enterRating(rating: number) {
		let slider = element(by.id('input-rating'));
		browser
			.actions()
			.dragAndDrop(slider, { x: rating * 10, y: 0 })
			.perform();
	}
	submitForm() {
		element(by.css('#reactive-form button')).click();
	}
}
