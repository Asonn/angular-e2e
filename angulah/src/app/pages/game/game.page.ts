import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GameApi } from 'src/app/apis/game.api';

@Component({
	templateUrl: './game.page.html',
	styleUrls: ['./game.page.css']
})
export class GamePage implements OnInit {
	form = new FormGroup({
		title: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9 _-]+$')]),
		rating: new FormControl()
	});
	newGame = {} as Game;
	games: Game[];

	get q() {
		return this.form.controls;
	}

	constructor(private gameApi: GameApi) {	}

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
}
