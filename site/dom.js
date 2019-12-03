

// DOM: Document Object Model

/*
			<tr>
				<td>1</td>
				<td>Fortnite</td>
				<td>8.5</td>
			</tr>
			*/

function addGame() {
	// oldskool efficiente maar omslachtige manier
	let newTr = document.createElement('tr');

	let newTdId = document.createElement('td');
	let idTextNode = document.createTextNode('849');
	newTdId.appendChild(idTextNode);
	newTr.appendChild(newTdId);

	let newTdGame = document.createElement('td');
	let gameTextNode = document.createTextNode('PubG');
	newTdGame.appendChild(gameTextNode);
	newTr.appendChild(newTdGame);

	let newTdRating = document.createElement('td');
	let ratingTextNode = document.createTextNode('3.5');
	newTdRating.appendChild(ratingTextNode);
	newTr.appendChild(newTdRating);

	let table = document.querySelector('table tbody');
	table.appendChild(newTr);

	// kort maar lelijk en niet efficient


	// relatief kort, ok, efficient

}