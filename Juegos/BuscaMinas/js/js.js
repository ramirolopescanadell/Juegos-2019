const cantFilas = 18;
const cantColumnas = 35;
const cantCeldas = cantFilas * cantColumnas;
const  cantMinas = 70;
var minas = [];
var cantVecinos = [];
var mostrados = [];
var bandera = [];
var perdio = false;

function chequearPosicion(x,y,i,j){
	if(((y == cantColumnas - 1) && (j == 1)) || ((y == 0) && (j == -1))){
		return false;
	}
	if((( x == cantFilas - 1 ) && (i == 1)) || ((x == 0 )&&(i == -1))){
		return false;
	}
	return true;
}

function contarVecinos(x,y){
	var pos;
	var cant = 0;
	for (var i = -1; i <= 1; i++) {
		for (var j = -1; j <= 1; j++) {
			pos = (x + i) * cantColumnas + j + y;
			if(chequearPosicion(x,y,i,j)) {
				if(minas.includes(pos)){
					cant++;
				}
			}
		}
	}
	return cant;
}

function iniciar(){
	for (var i = 0; i < cantCeldas; i++) {
		mostrados[i] = false;
		bandera[i] = false;
	}
	var pos;
	for (var i = 0; i < cantMinas; i++) {
		pos = Math.floor(Math.random() * cantCeldas);
		while(minas.includes(pos)){
			pos = Math.floor(Math.random() * cantCeldas);
		}
		minas[i] = pos;
	}
	for (var i = 0; i < cantFilas; i++) {
		for (var j = 0; j < cantColumnas; j++) {
			pos = i * cantColumnas + j;
			if(!minas.includes(pos)){
				cantVecinos[pos] = contarVecinos(i,j);
			}
		}
	}
	contarVecinos(0,0);
}

function ganaste(){
	alert("ganaste");
}

function mostrar(x,y){
	var pos = x * cantColumnas + y;
	mostrados[pos] = true;
	document.getElementById(pos).style.backgroundImage= null;
	if(minas.includes(pos)){
		document.getElementById(pos).style.backgroundImage= "url('css/imagenes/bomba.png')";
	}else{
		document.getElementById(pos).style.backgroundColor = "grey"
		if(cantVecinos[pos] > 0){
			document.getElementById(pos).innerHTML = cantVecinos[pos];
		}else{
			for (var i = -1; i <= 1; i++) {
				for (var j = -1; j <= 1; j++) {
					if(chequearPosicion(x,y,i,j)) {
						var posV = (x + i) * cantColumnas + j + y;
						if((!minas.includes(posV)) && (mostrados[posV] == false)){
							mostrar(x+i, j+y);
						}
					}
				}
			}
		}
	}
}

function perdiste(){
	perdio = true;
	for (var i = 0; i < cantFilas; i++) {
		for (var j = 0; j < cantColumnas; j++) {
			mostrar(i ,j);
		}
	}
}

function buscarMina(x,y,event){
	var pos = x * cantColumnas + y;
	if(!mostrados[pos]){
		if(event.button == 0){
			mostrar(x,y);
			if(minas.includes(pos)){
				perdiste();
			}
		}else{
			if(!bandera[pos]){
				document.getElementById(pos).style.backgroundImage= "url('css/imagenes/bandera.png')";
				bandera[pos] = true;
			}else{
				document.getElementById(pos).style.backgroundImage= null;
				bandera[pos] = false;
			}
		}
		if((!mostrados.includes(false))&&(!perdio)){
			ganaste();
		}
	}
}
window.onload = iniciar();