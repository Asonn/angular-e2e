import { Routes } from '@angular/router';
import { GamePage } from './pages/game/game.page';
import { ZooiPage } from './pages/zooi/zooi.page';
import { AuthPage } from './pages/auth/auth.page';
import { AuthCallbackPage } from './pages/auth-callback/auth-callback.page';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
	{ path: 'game', component: GamePage, canActivate: [AuthGuard] },
	{ path: 'zooi/:id', component: ZooiPage },
	{ path: 'auth', component: AuthPage },
	{ path: 'auth-callback', component: AuthCallbackPage },
	{ path: '', redirectTo: '/game', pathMatch: 'full' }
];
