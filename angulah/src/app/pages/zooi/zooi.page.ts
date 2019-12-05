import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
	templateUrl: './zooi.page.html',
	styleUrls: ['./zooi.page.css']
})
export class ZooiPage implements OnInit {
	toonLifecycle = false;

	pcForm = new FormGroup({
		postcode: new FormControl(),
		huisnummer: new FormControl()
	});

	constructor(private route: ActivatedRoute) {
		console.log('hallo vanuit zooi constructor');
	}

	ngOnInit() {
		console.log('hallo vanuit zooi ngOnInit');

		this.route.params.pipe(map(x => +x.id)).subscribe(x => console.log(x));
	}

	search(item) {
		console.log('Ik ga druk op zoek naar:', item);
	}
}
