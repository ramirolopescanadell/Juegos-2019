const altoG = 663;
const anchoG = 1366 / 2;
const cantF = 4;
const sizeC = anchoG / cantF - 20;
//objetos
var ocupados = [];
var cuadrados = [];
//variables
var apretado = false;

function setup(){
	createCanvas(anchoG,altoG);
	var id;
	for (var i = 0; i < cantF; i++) {
		for (var j = 0; j < cantF; j++) {
			id = floor(random(0,15));
			while(ocupados.includes(id)){
				id = floor(random(0,16));
			}
			ocupados.push(id);
			cuadrados[i* cantF + j] = new Cuadrado(j*sizeC + 35 ,i*sizeC + 35,id,sizeC, i*cantF + j);
		}
	}
}

function draw(){
	background("black");
	for (var i = 0; i < 16; i++) {
		cuadrados[i].show();
	}
}
function keyPressed() {
  	if (!apretado) {
    	apretado = true;
    	for (var i = 0; i < 16; i++) {
			if(cuadrados[i].mover(key)){
				break;
			}
		}
	}
}

function keyReleased() {
  apretado = false;
}
function ganaste(){
	var cantBien;
	for (var i = 0; i < 16; i++) {
		if(cuadrados[i].id + 1 == cuadrados[i+1].id){
			cantBien++;
		}
	}
	if(cantBien == 15){
		alert("ganaste");
		noLoop();
	}
}