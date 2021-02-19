var ocupado =[15];

function iniciar(){
	for(var i=0; i<=15; i++){
		ocupado[i] = false;
	}
	crearNumero();
}

function crearNumero(){
	var num;
	if(Math.floor(Math.random() * 10) > 0){
		num = 2;
	}else{
		num = 4;
	}
	var pos = Math.floor(Math.random() * 15 + 1);
	if(ocupado.includes(false)){
		while(ocupado[pos]){
			var pos = Math.floor(Math.random() * 15 + 1);
		}
		document.getElementById(pos).innerHTML = num;
		ocupado[pos] = true;
	}else{
		alert("perdiste");
	}
	colorear();
}	
function moverArriba(){
	for(var i=0; i<=2; i++){
		for(var j=0; j<=3; j++){
			var aux = i;
			while((ocupado[aux * 4 + j] == false)&&(aux >= 0)){
				document.getElementById(aux * 4 + j).innerHTML = document.getElementById((aux + 1)*4 + j).innerText;
				document.getElementById((aux + 1)*4 + j).innerHTML = " ";	
				if(ocupado[(aux + 1)*4 + j]){
					ocupado[aux * 4 + j] = true;
					ocupado[(aux + 1)*4 + j]	= false;
				}	
				aux--;
			}
		}
	}
	for(var i=0; i<=2; i++){
		for(var j=0; j<=3; j++){
			if((ocupado[i * 4 + j])&&(document.getElementById(i * 4 + j).innerText == document.getElementById((i + 1)*4 + j).innerText)){
				document.getElementById(i * 4 + j).innerHTML = document.getElementById(i * 4 + j).innerText * 2;
				document.getElementById((i + 1)*4 + j).innerHTML = " ";	
				ocupado[(i + 1)*4 + j] = false;
				aux = i + 1;
				while((ocupado[aux * 4 + j] == false)&&(aux <= 2)){
					document.getElementById(aux * 4 + j).innerHTML = document.getElementById((aux + 1)*4 + j).innerText;
					document.getElementById((aux + 1)*4 + j).innerHTML = " ";	
					if(ocupado[(aux + 1)*4 + j]){
						ocupado[aux * 4 + j] = true;
						ocupado[(aux + 1)*4 + j]	= false;
					}	
					aux++;
				}
			}
		}
	}
}
function moverDerecha(){
	for(var i=3; i>=0; i--){
		for(var j=3; j>=1; j--){
			var aux = j;
			while((ocupado[i* 4 + aux] == false) &&(aux <=3)){
				document.getElementById(i* 4 + aux).innerHTML = document.getElementById(i * 4 + aux - 1).innerText;
				document.getElementById(i* 4 + aux - 1).innerHTML = " ";
				if(ocupado[i* 4 + aux - 1]){
					ocupado[i* 4 + aux - 1] = false;
					ocupado[i*4 + aux] = true;
				}
				aux++;
			}	
		}
	}
	for(var i=3; i>=0; i--){
		for(var j=3; j>=1; j--){
			if((ocupado[i * 4 + j])&&(document.getElementById(i * 4 + j).innerText == document.getElementById(i* 4 + j - 1).innerText)){
				document.getElementById(i * 4 + j).innerHTML = document.getElementById(i * 4 + j).innerText * 2;
				document.getElementById(i* 4 + j - 1).innerHTML = " ";	
				ocupado[i* 4 + j - 1] = false;
				aux = j - 1;
				while((ocupado[i* 4 + aux] == false) &&(aux >=1)){
					document.getElementById(i* 4 + aux).innerHTML = document.getElementById(i * 4 + aux - 1).innerText;
					document.getElementById(i* 4 + aux - 1).innerHTML = " ";
					if(ocupado[i* 4 + aux - 1]){
						ocupado[i* 4 + aux - 1] = false;
						ocupado[i*4 + aux] = true;
					}
					aux--;
				}	
			}
		}
	}
}
function moverAbajo(){
	for(var i=3; i>=1; i--){
		for(var j=3; j>=0; j--){
			var aux = i;
			while((ocupado[aux* 4 + j] == false)&&(aux <= 3)){
				document.getElementById(aux* 4 + j).innerHTML = document.getElementById((aux - 1) * 4 + j ).innerText;
				document.getElementById((aux - 1) * 4 + j) .innerHTML = " ";
				if(ocupado[(aux - 1) * 4 + j  ] ){
					ocupado[(aux - 1) * 4 + j ] = false;
					ocupado[aux*4 + j] = true;
				}
				aux++;
			}	
		}
	}
	for(var i=3; i>=1; i--){
		for(var j=3; j>=0; j--){
			if((ocupado[i * 4 + j])&&(document.getElementById(i * 4 + j).innerText == document.getElementById((i - 1) * 4 + j).innerText)){
				document.getElementById(i * 4 + j).innerHTML = document.getElementById(i * 4 + j).innerText * 2;
				document.getElementById((i - 1) * 4 + j).innerHTML = " ";	
				ocupado[(i - 1) * 4 + j] = false;
				aux = i - 1;
				while((ocupado[aux* 4 + j] == false)&&(aux >= 1)){
					document.getElementById(aux* 4 + j).innerHTML = document.getElementById((aux - 1) * 4 + j ).innerText;
					document.getElementById((aux - 1) * 4 + j) .innerHTML = " ";
					if(ocupado[(aux - 1) * 4 + j  ] ){
						ocupado[(aux - 1) * 4 + j ] = false;
						ocupado[aux*4 + j] = true;
					}
					aux--;
				}
			}
		}
	}
}

function moverIzquierda(){
	for(var i=0; i<=3; i++){
		for(var j=0; j<=2; j++){
			var aux = j;
			while((ocupado[i* 4 + aux] == false)&&(aux >= 0)){
				document.getElementById(i* 4 + aux).innerHTML = document.getElementById(i * 4 + aux + 1).innerText;
				document.getElementById(i * 4 + aux + 1).innerHTML = " ";
				if(ocupado[i * 4 + aux + 1]){
					ocupado[i * 4 + aux + 1] = false;
					ocupado[i*4 + aux] = true;
				}
				aux--;
			}	
		}
	}
	for(var i=0; i<=3; i++){
		for(var j=0; j<=2; j++){
			if((ocupado[i * 4 + j])&&(document.getElementById(i * 4 + j).innerText == document.getElementById(i * 4 + j + 1).innerText)){
				document.getElementById(i * 4 + j).innerHTML = document.getElementById(i * 4 + j).innerText * 2;
				document.getElementById(i * 4 + j + 1).innerHTML = " ";	
				ocupado[i * 4 + j + 1] = false;
				aux = j + 1;
				while((ocupado[i* 4 + aux] == false)&&(aux <= 2)){
					document.getElementById(i* 4 + aux).innerHTML = document.getElementById(i * 4 + aux + 1).innerText;
					document.getElementById(i * 4 + aux + 1).innerHTML = " ";
					if(ocupado[i * 4 + aux + 1]){
						ocupado[i * 4 + aux + 1] = false;
						ocupado[i*4 + aux] = true;
					}
					aux++;
				}
			}
		}
	}
}

function colorear(){
	var color = "#B4B8B4" ;
	for(var i=0; i<=3; i++){
		for(var j=0; j<=3; j++){
			switch(document.getElementById(i * 4 + j).innerText){
				case "2": color = "#C7B93A" ;  break;
				case "4": color = "#ADA132";  break;
				case "8": color = "#94892B";  break;
				case "16": color = "#D650A8"; break;
				case "32": color = "#BD4693"; break;
				case "64": color = "#963875"; break;
				case "128": color = "#E3D432"; break;
				case "256": color = "#BDB02A"; break;
				case "512": color = "#575113"; break;
				case "1024": color = "#D63E33"; break;
				case "2048": color = "#BD372D"; break;
				case "4096": color = "#571915"; break;
				case "8192": color = "#772899"; break;
				default: color = "#B4B8B4";
			}
			document.getElementById(i * 4 + j).style.backgroundColor = color;
		}
	}
}
document.addEventListener("keydown", function(e){
switch(e.keyCode){
			case 39 : moverDerecha(); break;
			case 37 : moverIzquierda(); break;
			case 38 : moverArriba(); break;
			case 40 : moverAbajo(); break;
	}
	if((e.keyCode <= 40) && (e.keyCode >= 37)){
		crearNumero();
	}
})

iniciar();













/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var cuadradoWidth = canvas.width / 4;
var cuadradoHeight = canvas.height / 4 + 5;
var colorBorde = "#5A5C5A";

for(var i=0; i<=400; i=i+100){
	ctx.moveTo(i,0);
	ctx.lineTo(i,400);
	ctx.moveTo(0,i);
	ctx.lineTo(400,i);
}
ctx.lineWidth = 3;
ctx.strokeStyle = colorBorde ;
ctx.stroke();

ctx.textAlign = "center";
ctx.font='30px Arial';
var posI = Math.floor(Math.random() * 4);
var posJ = Math.floor(Math.random() * 4);
var num = Math.floor(Math.random() * 2 + 1) * 2;
ctx.fillText(num,cuadradoWidth/2 + cuadradoWidth * posI, cuadradoHeight/2 +  cuadradoHeight * posJ);
*/