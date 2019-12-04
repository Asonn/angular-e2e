import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'autocompleter',
	templateUrl: './autocompleter.component.html',
	styleUrls: ['./autocompleter.component.css']
})
export class AutocompleterComponent {
	@Input() data: any[];
	@Input() displayProp: string;
	@Output() itemSelect = new EventEmitter();
	results: any[];
	query = new FormControl();

	autocomplete() {
		if (!this.query.value) {
			delete this.results;
			return;
		}

		this.results = [];

		for (let item of this.data) {
			for (let prop in item) {
				if (
					item[prop] &&
					item[prop]
						.toString()
						.toLowerCase()
						.includes(this.query.value.toLowerCase())
				) {
					this.results.push(item);
					break;
				}
			}
		}
	}

	next() {
		for (let i = 0; i < this.results.length; i++) {
			if (this.results[i].highlight) {
				delete this.results[i].highlight;
				this.results[(i + 1) % this.results.length].highlight = true;
				return;
			}
		}

		this.results[0].highlight = true;
	}

	select() {
		let item = this.results.find(x => x.highlight);
		this.itemSelect.emit(item);
	}
}
