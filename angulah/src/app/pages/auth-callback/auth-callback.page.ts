import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	templateUrl: './auth-callback.page.html',
	styleUrls: ['./auth-callback.page.css']
})
export class AuthCallbackPage implements OnInit {
	constructor(private authService: AuthService) {}

	async ngOnInit() {
		console.log('callback hier', this.authService);
		await this.authService.completeLogin();
	}
}
