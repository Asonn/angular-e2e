import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy,
	ChangeDetectorRef
} from '@angular/core';

@Component({
	selector: 'datachanger',
	templateUrl: './datachanger.component.html',
	styleUrls: ['./datachanger.component.css'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatachangerComponent implements OnInit {
	@Input() data: any[];

	constructor(private cdr: ChangeDetectorRef) {}

	ngDoCheck() {
		if (this.data.length % 3 === 0) {
			this.cdr.markForCheck();
		}
	}

	ngOnInit() {}

	doeIets(item) {
		item.title += 'w';
		return item.title;
	}
}
