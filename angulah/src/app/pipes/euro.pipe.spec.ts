import { EuroPipe } from './euro.pipe';

describe('Pipe: Euro', () => {
	let pipe: EuroPipe;

	beforeEach(() => {
		pipe = new EuroPipe();
	});

	it('should format a number without decimals as a euro currency', () => {
		expect(pipe.transform(123)).toBe('€ 123,00');
	});

	it('should format a number with one decimals as a euro currency', () => {
		expect(pipe.transform(123.4)).toBe('€ 123,40');
	});

	it('should format a number with multiple decimals as a euro currency', () => {
		expect(pipe.transform(123.45)).toBe('€ 123,45');
	});

	it('should handle undefined gracefully', () => {
		// GIGO: Garbage In, Garbage Out
		expect(pipe.transform(undefined)).toBe(undefined);
	});
});
