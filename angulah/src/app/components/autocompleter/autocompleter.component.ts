import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavigateService } from 'src/app/services/navigate.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';


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

	constructor(private navigateService: NavigateService) {}

	ngOnInit() {
		this.query.valueChanges
			.pipe(
				debounceTime(300),
				distinctUntilChanged()
			)
			.subscribe(() => this.autocomplete());
	}

	autocomplete() {
		console.log('autocompleting', this.query.value);
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
		this.navigateService.next(this.results);
	}

	select() {
		let item = this.results.find(x => x.highlight);
		this.itemSelect.emit(item);
	}
}
