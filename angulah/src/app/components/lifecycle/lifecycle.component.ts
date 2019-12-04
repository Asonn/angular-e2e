import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
	selector: 'lifecycle',
	templateUrl: 'lifecycle.component.html'
})
export class LifecycleComponent implements OnInit, OnDestroy {
	@Input() message: string;

	constructor() { // dependency injection
		console.log('[lifecycle] constructor', this.message);
	}

	ngOnInit() { // alle andere init
		console.log('[lifecycle] init', this.message);

		setInterval(() => {
			console.log('interval');
		}, 2000);
	}

	ngOnDestroy() {
		// zooi opruimen
		console.log('[lifecycle] destroy');

		// websockets
		// observables unsubscriben
		// intervals/sliding timeouts
		// geolocation watchPosition()
		// web workers
		// indexed database
		// camera API
	}
}