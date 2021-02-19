//constantes
const alturaG = 663;
const anchoG = 700;
const distancia = 200;
const altoP = 50;
const anchoP = 200;
const cantPlataformas = 5;
//imagenes
var imgPlataforma;
var imgRota;
var imgNube;
var imgNube2;
var imgPiso;
var imgFondo;
var imgPanda;
//audio
var audioSalto = new Audio("js/salto.mp3");
var audioPerdiste = new Audio("js/perdiste.mp3");
//objetos
var jugador;
var plataformas = [];
var nubes = [];
//variables varias
var scoreAct = 0;
var score = 0;

function setup(){
	audioSalto.volume = 0.1;
	audioPerdiste.volume = 0.1;
	createCanvas(anchoG,alturaG);
	iniciar();
}

function draw(){
	background(imgFondo);
	translate(0, height / 1.5 - jugador.y);
	for (var i = 0; i < nubes.length; i++) {
		nubes[i].show();
	}
	if(keyIsPressed){
		jugador.mover(key);
	}
	jugador.show();
	for (var i = 0; i < plataformas.length; i++) {
		plataformas[i].show();
	}
	actualizarScore();
}

function  preload(){
	imgPiso = loadImage('js/piso.png');
	imgPlataforma = loadImage('js/plataforma.png');
	imgRota = loadImage('js/plataforma2.png');
	imgNube = loadImage('js/nube.png');
	imgNube2 = loadImage('js/nube2.png');
	imgFondo = loadImage('js/cielo.jpg');
	imgPanda = loadImage('js/Panda.png');
}

function iniciar(){
	document.getElementById('boton').style.display = "none";
	score = 0;
	scoreAct = 0;
	jugador = new Player();
	plataformas[0] = new Plataforma(0,alturaG-50,anchoG,200,0,0,imgPiso);
	for (var i = 1; i < cantPlataformas; i++) {
		var x = random(0, anchoG- 200);
		plataformas[i] = new Plataforma(x,plataformas[i-1].y -distancia,anchoP,altoP,i,0,imgPlataforma);
	}
	for (var i = 0; i < 4; i++) {
		nubes[i] = new Nube(random(0, anchoG- 200),random(jugador.y - 800 , jugador.y + 200),random(1,2));
	}
	//colores [0] = 180; colores[1] = 255; colores[2] = 255;
	loop();
}

function actualizarScore(){
	if(scoreAct >= score){
		score = scoreAct;
	}
	document.getElementById('contador').innerHTML = floor(score);
}

/*function cambiarFondo(){
	var color = map(score, -50, 500, 180, 0);
	if(colores[0] > 0){
		colores[0] = color;
	}else if(colores[1] > 0){
		color = map(score, 500, 2000, 255, 0);
		colores[1] = color;
	}else{
		color = map(score, 2000, 8000, 255, 0);
		colores[2] = color;
	}
} */