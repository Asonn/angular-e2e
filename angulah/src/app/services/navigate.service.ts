import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigateService {
	next(data) {
		for (let i = 0; i < data.length; i++) {
			if (data[i].highlight) {
				delete data[i].highlight;
				data[(i + 1) % data.length].highlight = true;
				return;
			}
		}

		data[0].highlight = true;
	}
}
