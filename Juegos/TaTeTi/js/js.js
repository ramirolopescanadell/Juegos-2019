var turno = 0;
var ocupado = [9];
var ganador;

for (var i = 0; i < 9; i++) {
	ocupado[i] = false;
}
document.getElementById("turno").innerHTML = "Jugador  (X)";


function resolver(){
	var ganaO;
	var ganaX;
	var pos = [9];
	for(var i = 0; i <9; i++){
		pos[i] = document.getElementById(i).innerText;
	}
	for (var i = 0; i <3; i++) {
		ganaX = true;
		ganaO = true;
		for (var j = 0; j < 3; j++) {
			if(pos[i*3 + j] != "O"){
				ganaO = false;
			}
			if(pos[i*3 + j]  != "X"){
				ganaX = false;
			}
		}
		if((ganaO) || (ganaX)){
			 if(ganaO){
		  		ganador = "O";
		  	}else{
		  		ganador = "X";
		  	}
			return true;
		}
	}
	for (var i = 0; i <3; i++) {
		ganaX = true;
		ganaO = true;
		for (var j = 0; j < 3; j++) {
			if(pos[i + 3 * j] != "O"){
				ganaO = false;
			}
			if(pos[i + 3 * j] != "X"){
				ganaX = false;
			}
		}
		if((ganaO) || (ganaX)){
		  	if(ganaO){
		  		ganador = "O";
		  	}else{
		  		ganador = "X";
		  	}
			return true;
		}
	}
	if(pos[4] != ""){
		if(  (  (pos[0] == pos[4]) && (pos[0] == pos[8])  ) || (  (pos[2] == pos[4]) && (pos[2] == pos[6])  ) ){
			if(pos[4] == "O"){
				ganador = "O";
			}else{
				ganador = "X";
			}
			return true;
		}
	}
}
function terminarJuego(){
	for (var i = 0; i < 9; i++) {
		document.getElementById(i).innerHTML = " ";
	}
	document.getElementById("fin").style.display="block";
	document.getElementById("fin").innerHTML = "Gano el jugador " + ganador;
}
function ponerSigno(parametro){
	if(ocupado[parametro] == false) { 
		if(turno == 0){
			document.getElementById(parametro).innerHTML = "X";
			document.getElementById("turno").innerHTML = "Jugador (O)";
			turno++;
		}else{
			document.getElementById(parametro).innerHTML = "O";
			document.getElementById("turno").innerHTML = "Jugador (X)";
			turno--;
		}
		ocupado[parametro] = true;
		if(resolver()){
			terminarJuego();
		}
	}
}