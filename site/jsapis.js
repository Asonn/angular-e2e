
document.querySelector('#droparea').addEventListener('dragover', e => {
	e.preventDefault();
	e.stopPropagation();
});

document.querySelector('#droparea').addEventListener('drop', e => {
	e.preventDefault();
	e.stopPropagation();


	for(let file of e.dataTransfer.files) {
		console.log('file:', file.name, file.size, file.type);
	}
});



let socket;
function connect() {
	socket = new WebSocket('ws://localhost:3000/chat');
	socket.addEventListener('open', () => console.log('geopend!'));
	socket.addEventListener('close', () => console.log('gesloten!'));
	socket.addEventListener('message', e => {
		document.querySelector('ol').innerHTML += `<li>${e.data}</li>`;
	});
}

function say() {
	let message = document.querySelector('#input-message').value;
	socket.send(message);
}










function berekenFibo() {
	let getal = +document.querySelector('#fibo-input').value;


	let worker = new Worker('fibo.js');
	worker.addEventListener('message', e => {
		document.querySelector('#fibo-result').innerText = e.data;
	});
	worker.postMessage(getal);

	
}




function doeLocatiebepaling() {
	navigator.geolocation.watchPosition(
		pos => {
			document.querySelector('#latitude').innerText = pos.coords.latitude;
			document.querySelector('#longitude').innerText = pos.coords.longitude;
			document.querySelector('#accuracy').innerText = pos.coords.accuracy;
		},
		err => console.log('error:', err),
		{ enableHighAccuracy: true }
	);
}


// strings only
if (!localStorage.counter) {
	localStorage.counter = 0;
}
localStorage.counter++;
document.querySelector('#local-counter').innerText = localStorage.counter;

if (!sessionStorage.counter) {
	sessionStorage.counter = 0;
}
sessionStorage.counter++;
document.querySelector('#session-counter').innerText = sessionStorage.counter;

