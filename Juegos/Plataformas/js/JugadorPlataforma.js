function Player(){
	this.x = anchoG / 2;
	this.y = 600;
	this.r = 25;
	this.velocidad = 0;
	this.paradoSobre = 0;

	this.chequearPlataforma = function(plataforma){
		if((this.y + this.r >= plataforma.y) &&
		(this.y + this.r < plataforma.y + plataforma.altura) &&
		(this.x + this.r >= plataforma.x) &&
		(this.x - this.r <= plataforma.x + plataforma.ancho)){
			return true;
		}else{
			if(plataforma.tengoSegunda){
				return this.chequearPlataforma(plataforma.segundaPlataforma);
			}
		}
	}

	this.tocandoSuelo = function(){
		for (var i = 0; i < cantPlataformas; i++) {
			if(this.chequearPlataforma(plataformas[i])){
				this.paradoSobre = i;
				return true;
			}
		}
		return false;
	}

	this.accionSobrePLataforma = function(){
		this.velocidad = 0;
		this.y = plataformas[this.paradoSobre].y -this.r;
		if(plataformas[this.paradoSobre].movimiento){
			this.x += plataformas[this.paradoSobre].direccion ;
		}
		if((plataformas[this.paradoSobre].rota) &&(plataformas[this.paradoSobre].caida == 0)){
			var p = this.paradoSobre;
			var aux = setTimeout(function(){plataformas[p].caida = 20;},100);
		}
	}

	this.show = function(){
		if((this.tocandoSuelo())&&(this.velocidad >=0) &&(plataformas[this.paradoSobre].caida == 0)){
			this.accionSobrePLataforma();
		}else{
			if(this.velocidad < -1){
				scoreAct++;
			}else{
				scoreAct--;
			}
			this.velocidad ++;
			this.y += this.velocidad;
		}
		if(this.velocidad == 100){
			this.perder();
		}
		/*fill("red");
		noStroke();
		ellipse(this.x,this.y+5,this.r*2);*/
		image(imgPanda,this.x-this.r,this.y-this.r, this.r*2,this.r*2);
	}

	this.mover = function(key){
		if ((this.tocandoSuelo()) && (keyIsDown(UP_ARROW))) {
			audioSalto.play();
			audioSalto.currentTime = 0;
			this.velocidad = -25;
		}else if(keyIsDown(LEFT_ARROW)){
			this.x -= 5;
			if(this.x <= 0){
				this.x = anchoG;
			}
		}else if(keyIsDown(RIGHT_ARROW)){
			this.x += 5;
			if(this.x >= anchoG){
				this.x = 0;
			}
	    }
 	}

 	this.perder = function(){
 		audioPerdiste.play();
 		document.getElementById('boton').style.display = "inline-block";
 		noLoop();
		//iniciar();
 	}
}

