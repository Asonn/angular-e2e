import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'euro' })
export class EuroPipe implements PipeTransform {
	transform(value: any, ...args: any[]) {
		if (!value) {
			return value;
		}
		let s = value.toString();
		if (!s.includes('.')) {
			return `\u20AC ${value},00`;
		}
		let [main, fractions] = s.split('.');
		return `\u20AC ${main},${fractions.padEnd(2, '0')}`;
	}
}
