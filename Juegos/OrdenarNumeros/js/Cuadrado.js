function Cuadrado(x,y,id,tamaño, pos){
	this.id = id;
	this.x = x;
	this.y = y;
	this.tamaño = tamaño;
	this.pos = pos;

	this.show = function(){
		fill("grey");
		strokeWeight(4);
		stroke(51);
		rect(this.x,this.y,this.tamaño,this.tamaño);
		if(this.id != 0){
			fill("white");
			textAlign(CENTER);
			textSize(50);
			text(this.id, this.x + this.tamaño / 2,this.y+ this.tamaño/2 + 15);
		}
	}

	this.actualizarPos = function(pos){
		var aux = this.id;
		this.id = cuadrados[pos].id;
		cuadrados[pos].id = aux;
		ganaste();
	}

	this.moverIzquierda = function(){
		if(this.pos % cantF != 0){
			if(cuadrados[this.pos - 1].id == 0){
				this.actualizarPos(this.pos - 1);
				return true;
			}
		}
		return false;
	}

	this.moverArriba = function(){
		if(this.pos >= cantF){
			if(cuadrados[this.pos - cantF].id == 0){
				this.actualizarPos(this.pos - cantF);
				return true;
			}
		}
		return false;
	}

	this.moverDerecha = function(){
		if((this.pos + 1) % cantF != 0 ){
			if(cuadrados[this.pos + 1].id == 0){
				this.actualizarPos(this.pos + 1);
				return true;
			}
		}
		return false;
	}

	this.moverAbajo = function(){
		if(this.pos < 12){
			if(cuadrados[this.pos + cantF].id == 0){
				this.actualizarPos(this.pos + cantF);
				return true;
			}
		}
		return false;
	}

	this.mover = function(key){
		switch(key){
			case"ArrowLeft" : return this.moverIzquierda();break;
			case"ArrowUp" : return this.moverArriba();break;
			case"ArrowRight" : return this.moverDerecha();break;
			case"ArrowDown" : return this.moverAbajo();break;
		}
	}
}