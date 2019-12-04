import { Component } from '@angular/core';
import { Game } from './models/game';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

// function mijnValidator(control: AbstractControl) {
// 	return { jouwKey: 'error message' };
// }

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	toonLifecycle = false;
	form = new FormGroup({
		title: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 _-]+$')]),
		rating: new FormControl()
	});
	newGame = {} as Game;

	get q() {
		return this.form.controls;
	}

	games: Game[] = [
		{ id: 4, title: 'Fortnite', rating: 9 },
		{ id: 8, title: 'Minecraft', rating: 10 },
		{ id: 15, title: 'Ori and the blind forest', rating: 9 },
		{ id: 16, title: 'Runescape', rating: 4 },
		{ id: 23, title: 'Snake', rating: 8.5 },
		{ id: 42, title: 'World of Warcraft', rating: 7.5 },
		{ id: 108, title: 'PubG', rating: 3.5 },
		{ id: 999, title: 'World of Warcraft classic', rating: 8.0 }
	];

	addGameReactive() {
		this.games.push(this.form.value);
	}

	addGameTemplate() {
		this.games.push(this.newGame);
	}

	search(item) {
		console.log('Ik ga druk op zoek naar:', item)
	}
}
