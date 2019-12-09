import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
	templateUrl: './auth.page.html',
	styleUrls: ['./auth.page.css']
})
export class AuthPage {
	constructor(private http: HttpClient, private authService: AuthService) {}

	login() {
		console.log('logging in');
		this.authService.login();
	}

	logout() {
		this.authService.logout();
	}

	getGames() {
		console.log('token:', 'Authentication', this.authService.token);

		let headers = new HttpHeaders({
			'Content-Type': 'application/json',
			Authorization: this.authService.token
		});

		// let headers = new HttpHeaders({
		// 	'Content-Type':  'application/json',
		// 	'Authentication': this.authService.token
		// });

		this.http
			.get('https://localhost:44393/game', { headers })
			.subscribe(games => {
				console.log('YES DIT WERKT', games);
			});
	}
}
