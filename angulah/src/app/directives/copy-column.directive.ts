import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[copyColumn]' })
export class CopyColumnDirective {
	private selecting = false;
	private startTd: HTMLElement;

	@HostListener('mousedown', ['$event'])
	mousedown(e) {
		if (e.target.tagName === 'TD') {
			this.selecting = true;
			this.startTd = e.target;
		}
	}

	@HostListener('mousemove', ['$event'])
	mousemove(e) {
		if (this.selecting && e.target.tagName === 'TD') {
			// mark tds as being part of selection
			e.target.classList.add('in-selection');
		}
	}

	@HostListener('mouseup', ['$event'])
	mouseup(e) {
		this.selecting = false;

		if (e.target.tagName === 'TD') {
			let endTd = e.target;
			let tbody = endTd.closest('tbody');
			let startRow = this.startTd.parentElement;
			let endRow = endTd.parentElement;

			// remove all previous td copied/in-selection classes
			tbody
				.querySelectorAll('td')
				.forEach(td => td.classList.remove('copied', 'in-selection'));

			// determine row indexes for slicing away irrelevant rows
			let trs = [...tbody.querySelectorAll('tr')];
			let startRowIndex = trs.findIndex(row => row === startRow);
			let endRowIndex = trs.findIndex(row => row === endRow);

			// support selecting from bottom to top
			if (startRowIndex > endRowIndex) {
				let tempIndex = startRowIndex;
				startRowIndex = endRowIndex;
				endRowIndex = tempIndex;
			}

			let relevantTrs = trs.slice(startRowIndex, endRowIndex + 1);

			// get column index of th in order to get the column data
			let columnIndex = [...endRow.children].findIndex(
				column => column === endTd
			);
			let tds = relevantTrs.map(tr => tr.children[columnIndex]);

			// mark selected tds as copied
			tds.forEach(td => td.classList.add('copied'));

			// go through tds and get the texts to copy
			console.log('copied items:', tds.map(x => x.innerText).join(', '));
		}
	}
}
