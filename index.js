s = 'm';


// Beispiel Kontrollstruktur If - Bedingung
if( s == 'm'){
    console.log("Hallo Freund");
}else if( s == 'f') {
    console.log("iieeek Mädchen Bäh!")
}

/**
 * Beispiel Kontrollstruktur For - Schleife
 */

for( var i =0; i < 10; i++) {
	console.log(i);
}

function foobar( s ) {
	console.log("Funktionsaufruf " + s);
}

foobar("a");
foobar("b");
foobar("c");



function fib(n){
	if (n==0){return 0}
	if (n==1){return 1}
	return fib(n-1)+fib(n-2);
}
console.log( "Berechne fibonacci(4)");
console.log(fib(3));


fibcache = [];
function fib2(n){
	if (fibcache[n]){
		console.log( "liste " + n );
		return fibcache[n]
	}
	if (n==0){return 0}
	if (n==1){return 1}
	result = fib2(n-1)+fib2(n-2);
	fibcache[n] = result;
	return result;
}
console.log( "Berechne fibonacci(4)");
console.log(fib(5));

liste = [];
for( var i =1; i < 11; i++) {
	console.log(i);
}



text = "Dies ist ein string";