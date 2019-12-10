import {AppPage} from './app.po';

describe('workspace-project App', () => {
	let page: AppPage;

	beforeEach(() => {
		page = new AppPage();
	});

	it('should display header message', () => {
		page.navigateTo();
		expect(page.getParagraphText()).toEqual('Datepicker: Contacts');
	});
});
