import { Component, OnInit } from '@angular/core';
import { Game } from './models/game';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { GameApi } from './apis/game.api';

// function mijnValidator(control: AbstractControl) {
// 	return { jouwKey: 'error message' };
// }

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	toonLifecycle = false;
	form = new FormGroup({
		title: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 _-]+$')]),
		rating: new FormControl()
	});
	newGame = {} as Game;

	constructor(private gameApi: GameApi) {	}
	games: Game[];

	get q() {
		return this.form.controls;
	}

	ngOnInit() {
		this.gameApi.query().subscribe(games => {
			this.games = games;
			console.log('nieuwe games:', this.games);
		});
	}

	addGameReactive() {
		this.gameApi.add(this.form.value);
	}

	addGameTemplate() {
		this.gameApi.add(this.newGame);
	}

	search(item) {
		console.log('Ik ga druk op zoek naar:', item)
	}
}
