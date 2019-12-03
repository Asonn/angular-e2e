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
		{ id: 15, title: 'PubG', rating: 3.5 }
	];

	addGameReactive() {
		this.games.push(this.form.value);
	}

	addGameTemplate() {
		this.games.push(this.newGame);
	}
}
