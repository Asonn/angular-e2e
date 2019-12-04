import { AutocompleterComponent } from './autocompleter.component';

describe('Component: Autocompleter', () => {
	let autocompleter: AutocompleterComponent;

	beforeEach(() => {
		autocompleter = new AutocompleterComponent();
	});

	it('should autocomplete a list of suggestions', () => {
		autocompleter.data = [{ x: 'hoi' }, { x: 'doei' }, { x: 'whatever' }];
		autocompleter.query.setValue('e');
		autocompleter.autocomplete();
		expect(autocompleter.results).toEqual([
			{ x: 'doei' },
			{ x: 'whatever' }
		]);
	});

	it('should autocomplete with case-insensitive values', () => {
		autocompleter.data = [{ x: 'hoi' }, { x: 'DOEI' }, { x: 'whatever' }];
		autocompleter.query.setValue('e');
		autocompleter.autocomplete();
		expect(autocompleter.results).toEqual([
			{ x: 'DOEI' },
			{ x: 'whatever' }
		]);
	});

	it('should autocomplete with a case-insensitive query', () => {
		autocompleter.data = [{ x: 'hoi' }, { x: 'DOEI' }, { x: 'whatever' }];
		autocompleter.query.setValue('E');
		autocompleter.autocomplete();
		expect(autocompleter.results).toEqual([
			{ x: 'DOEI' },
			{ x: 'whatever' }
		]);
	});

	it('should autocomplete with a case-insensitive query', () => {
		autocompleter.data = [{ x: 34 }, { x: 695 }, { x: 666 }];
		autocompleter.query.setValue('6');
		autocompleter.autocomplete();
		expect(autocompleter.results).toEqual([{ x: 695 }, { x: 666 }]);
	});

	it('should handle empty values gracefully', () => {
		autocompleter.data = [
			{ x: 34, y: undefined },
			{ x: 695, y: null },
			{ x: 666, y: NaN }
		];
		autocompleter.query.setValue('6');
		autocompleter.autocomplete();
		expect(autocompleter.results).toEqual([
			{ x: 695, y: null },
			{ x: 666, y: NaN }
		]);
	});

	it('should only add each item once during autocompletion', () => {
		autocompleter.data = [
			{ x: 'hoi', y: 'hallo' },
			{ x: 'doei', y: '$$$$' },
			{ x: 'whatever', y: 'fortnite' }
		];
		autocompleter.query.setValue('o');
		autocompleter.autocomplete();
		expect(autocompleter.results).toEqual([
			{ x: 'hoi', y: 'hallo' },
			{ x: 'doei', y: '$$$$' },
			{ x: 'whatever', y: 'fortnite' }
		]);
	});

	it('should handle empty query values gracefully', () => {
		autocompleter.data = [{ x: 'hoi' }, { x: 'doei' }, { x: 'whatever' }];
		autocompleter.autocomplete();
		expect(autocompleter.results).toEqual(undefined);
	});

	describe('navigating next', () => {
		let data;

		beforeEach(() => {
			data = [
				{ x: 'hoi' },
				{ x: 'heuj' },
				{ x: 'doei' },
				{ x: 'whatever' }
			] as any[];
			autocompleter.data = data;
			autocompleter.query.setValue('e');
			autocompleter.autocomplete();
		});

		it('should support nexting to the first item', () => {
			autocompleter.next();
			expect(autocompleter.results[0].highlight).toBe(true);
		});

		it('should support nexting beyond the first item', () => {
			autocompleter.next();
			autocompleter.next();
			expect(autocompleter.results[0].highlight).toBeUndefined();
			expect(autocompleter.results[1].highlight).toBe(true);
		});

		it('should support beyond to the last item', () => {
			autocompleter.results.forEach(i => autocompleter.next());
			autocompleter.next();
			expect(autocompleter.results[autocompleter.results.length - 1].highlight).toBeUndefined();
			expect(autocompleter.results[0].highlight).toBe(true);
		});
	});
});
