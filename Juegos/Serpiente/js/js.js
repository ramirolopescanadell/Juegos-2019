var vivora = [421];
var direccion = 37;
var fruta; 
var intervalo;
var poderActivado = false;
var aparecePoder = 10;
var colorActual = "red";
var cantCola = 0;
var colorFondo = "black";
var velocidad = 100;
var cantCeldas = 880;
var mayor = 840;
var menor1 = 39;
var menor2 = 40;
var lucesPrendidas = false;
var frutasComidas = 0;
//cosas del audio
var audioPerdiste = new Audio("js/sonidos/perdiste.mp3");
var audioComer = new Audio("js/sonidos/comer.ogg");
var musica = new Audio("js/sonidos/cancion.mp3");
var comerPoder = new Audio("js/sonidos/comerPoder.mp3");
var cancionPoder = new Audio("js/sonidos/cancionPoder.wav");
//var muteado = false;

function iniciar(){
	document.getElementById("botonIniciar").style.display="none";
	document.getElementById("contador").innerHTML = "X" + frutasComidas;
	interMusica = setInterval(function(){musica.play();}, 100)
	intervalo  = setInterval(mover, velocidad);
	fruta = Math.floor(Math.random() * cantCeldas + 1);
	while(fruta == 421){
		fruta = Math.floor(Math.random() * cantCeldas + 1);
	}
	document.getElementById(fruta).style.backgroundImage= "url('css/imagenes/fruta.jpg')";
	document.getElementById(421).style.backgroundColor = colorActual;
}
// movimiento

function moverArriba(pos){
	if(pos <= menor2){
		if(poderActivado){
			pos = pos + mayor;
		}else{
			perder();
		}
	}else{
		pos = pos - menor2;
	}
	return pos;
}
function moverDerecha(pos){
	if(pos % menor2 == 0 ){
		if(poderActivado){
			pos = pos - menor1;
		}else{
			perder();
		}
	}else{
		pos = pos + 1;
	}
	return pos;
}
function moverAbajo(pos){
	if(pos > mayor){
		if(poderActivado){
			pos= pos - mayor;
		}else{
			perder();
		}
	}else{
		pos = pos + menor2;
	}
	return pos;
}
function moverIzquierda(pos){
	if((pos== 1) || ((pos - 1) % menor2 == 0 )){
		if(poderActivado){
			pos = pos + menor1;
		}else{
			perder();
		}
	}else{
		pos = pos- 1;
	}
	return pos;
}
function perdiste(){
	document.getElementById(fruta).style.backgroundImage= null;
	document.getElementById("emergente").style.display="block";
	for (var i = 1 ; i <= cantCola; i++) {
		document.getElementById(vivora[i]).style.backgroundColor = "black";
	}
}

function perder(){
	clearInterval(intervalo);
	clearInterval(interMusica);
	musica.pause();
	musica.currentTime = 0;
	audioPerdiste.play();
	setTimeout(perdiste, 2000);
}

function luces(){
	if(lucesPrendidas == true){
		document.getElementById("luces").style.borderColor = "#5cce42";
		lucesPrendidas = false;
	}else{
		document.getElementById("luces").style.borderColor = "red";
		lucesPrendidas = true;
	}
}
function desactivarPoder(intervaloLuces){
	clearInterval(intervaloLuces);
	poderActivado = false;
	colorActual = "red";
	cancionPoder.pause();
	cancionPoder.currentTime = 0;
	interMusica = setInterval(function(){musica.play();}, 100)
	clearInterval(intervalo);
	velocidad = 100;
	intervalo  = setInterval(mover, velocidad);
}
function activarPoder(){
	comerPoder.play();
	clearInterval(interMusica);
	clearInterval(intervalo);
	musica.pause();
	musica.currentTime = 0;
	cancionPoder.play();
	aparecePoder = Math.floor(Math.random() * 5 + 10);
	poderActivado = true;
	colorActual = "green";
	velocidad = velocidad / 2;
	intervalo  = setInterval(mover, velocidad);
	var intervaloLuces = setInterval(luces,500);
	setTimeout(desactivarPoder,15000,intervaloLuces);
}
function comer(){
	if(vivora[0] == fruta){
		frutasComidas++;
		document.getElementById("contador").innerHTML = "X" + frutasComidas;
		document.getElementById(fruta).style.backgroundImage= null;
		fruta = Math.floor(Math.random() * cantCeldas + 1);
		aparecePoder--;
		if(aparecePoder == 1){
			document.getElementById(fruta).style.backgroundImage= "url('css/imagenes/estrella.jpg')";
			document.getElementById(fruta).style.backgroundSize = "100%";
			audioComer.play();
		}else{
			if(aparecePoder == 0){
				activarPoder();
				document.getElementById(vivora[0]).style.backgroundSize = "80%";
			}
			document.getElementById(fruta).style.backgroundImage= "url('css/imagenes/fruta.jpg')";
			audioComer.play();
		}
		cantCola++;
	}
	if(vivora.includes(vivora[0],1)){
		perder();
	}
}

function mover(){
	var aux = vivora[0];
	var aux2;
	document.getElementById(vivora[0]).style.backgroundColor = colorFondo;
	switch(direccion){
			case 39 : vivora[0] = moverDerecha(vivora[0]); break;
			case 37 : vivora[0] = moverIzquierda(vivora[0]); break;
			case 38 : vivora[0] = moverArriba(vivora[0]); break;
			case 40 : vivora[0] = moverAbajo(vivora[0]); break;
	}
	document.getElementById(vivora[0]).style.backgroundColor = colorActual;
	for (var i = 1 ; i <= cantCola; i++) {
		aux2 = vivora[i];
		vivora[i] = aux;
		aux = aux2;
		document.getElementById(vivora[i]).style.backgroundColor = colorActual;
	}
	document.getElementById(aux).style.backgroundColor = colorFondo;
	comer();
}
/*function mutear(){
	if(muteado){
		muteado = false;
		if(poderActivado){
			
		}else{
			clearInterval(interMusica);
			musica.pause();
			musica.currentTime = 0;
		}
	}else{
		muteado = true;
		if(poderActivado){
			
		}else{
			clearInterval(interMusica);
			musica.pause();
			musica.currentTime = 0;
		}
	}
}*/
document.addEventListener("keydown", function(e){
	if((e.keyCode <= 40) && (e.keyCode >= 37)){
		if((direccion == 37 ) && (e.keyCode == 39)){
			return;
		}else if((direccion == 38) && (e.keyCode == 40)){
			return;
		}else if((direccion == 39) && (e.keyCode == 37)){
			return;
		}else if((direccion == 40) && (e.keyCode == 38)){
			return;
		}else{
			direccion = e.keyCode;
		}
	}
})