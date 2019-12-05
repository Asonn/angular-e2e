import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../models/game';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class GameApi {
	subject = new Subject<Game[]>();
	private games: Game[];

	constructor(private http: HttpClient) {}

	query() {
		this.http
			.get<Game[]>('http://localhost:3000/games')
			.subscribe(games => {
				this.games = games;
				this.subject.next(games);
			});

		return this.subject;
	}

	add(game: Game) {
		this.http
			.post<Game>('http://localhost:3000/games', game)
			.subscribe(addedGame => {
				this.games.push(addedGame);
				this.subject.next(this.games);
			});
	}
}
