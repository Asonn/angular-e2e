

self.addEventListener('message', e => {
	let getal = +e.data;
	console.log('ik ga even rekenen!!', getal);
	let result = fibonacci(getal);
	console.log('jobs done');
	self.postMessage(result);
});




function fibonacci(n) {
	if (n === 0 || n === 1) {
		return 1;
	}

	return fibonacci(n - 2) + fibonacci(n - 1);
}