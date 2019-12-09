import { Injectable } from '@angular/core';
import { UserManager, User } from 'oidc-client';

@Injectable({ providedIn: 'root' })
export class AuthService {
	private settings = {
		authority: 'http://localhost:5000',
		client_id: 'angulah',
		redirect_uri: 'http://localhost:4200/auth-callback',
		response_type: 'id_token token',
		scope: 'openid profile gameapi'
	};
	user: User;

	manager: UserManager;

	constructor() {
		this.manager = new UserManager(this.settings);
	}

	login() {
		console.log('[auth] login');
		this.manager.signinRedirect();
	}

	logout() {
		this.manager.signoutRedirect();
	}

	get token() {
		return `${this.user.token_type} ${this.user.access_token}`;
	}

	async completeLogin() {
		this.user = await this.manager.signinRedirectCallback();
		console.log('[auth] user:', this.user);
	}
}
