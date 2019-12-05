import { AutocompleterComponent } from './autocompleter.component';
import { NavigateService } from 'src/app/services/navigate.service';
import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

describe('Component: Autocompleter', () => {
	let autocompleter: AutocompleterComponent;
	let navigateServiceMock;

	beforeEach(() => {
		navigateServiceMock = jasmine.createSpyObj('navigateService', ['next']);

		TestBed.configureTestingModule({
			declarations: [AutocompleterComponent],
			imports: [ReactiveFormsModule],
			providers: [{ provide: NavigateService, useValue: navigateServiceMock }]
		});
		autocompleter = TestBed.createComponent(AutocompleterComponent).componentInstance;
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

	it('should handle empty query values gracefully', () => {
		autocompleter.data = [{ x: 'hoi' }, { x: 'doei' }, { x: 'whatever' }];
		autocompleter.query.setValue('e');
		autocompleter.autocomplete();
		autocompleter.next();
		expect(navigateServiceMock.next).toHaveBeenCalled();
	});


});
