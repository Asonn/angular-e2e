import { Routes } from '@angular/router';
import { GamePage } from './pages/game/game.page';
import { ZooiPage } from './pages/zooi/zooi.page';

export const routes: Routes = [
	{ path: 'game', component: GamePage },
	{ path: 'zooi/:id', component: ZooiPage },
	{ path: '', redirectTo: '/game', pathMatch: 'full' }
];