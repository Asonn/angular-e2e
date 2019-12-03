import { MainPO } from './main.po';

describe('Page: Main', () => {
	it('should add a game to the list', async () => {
		let main = new MainPO();

		let countBefore = await main.countNrOfGames();

		main.enterTitle('South Park and the stick of truth');
		main.enterRating(9);
		main.submitForm();

		expect(main.countNrOfGames()).toBe(countBefore + 1);
	});
});
