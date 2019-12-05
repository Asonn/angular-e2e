import { NavigateService } from './navigate.service';

describe('Service: Navigate', () => {
	let data;
	let navigateService: NavigateService;

	beforeEach(() => {
		data = [
			{ x: 'hoi' },
			{ x: 'heuj' },
			{ x: 'doei' },
			{ x: 'whatever' }
		] as any[];
		navigateService = new NavigateService();
	});

	it('should support nexting to the first item', () => {
		navigateService.next(data);
		expect(data[0].highlight).toBe(true);
	});

	it('should support nexting beyond the first item', () => {
		navigateService.next(data);
		navigateService.next(data);
		expect(data[0].highlight).toBeUndefined();
		expect(data[1].highlight).toBe(true);
	});

	it('should support beyond to the last item', () => {
		data.forEach(i => navigateService.next(data));
		navigateService.next(data);
		expect(data[data.length - 1].highlight).toBeUndefined();
		expect(data[0].highlight).toBe(true);
	});
});
