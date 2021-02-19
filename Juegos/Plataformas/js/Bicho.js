function Bicho(dueño){
	this.direccion = 2;
	this.dueño = dueño;
	this.r = 20;
	this.x = this.dueño.x;
	this.y = this.dueño.y - 30;

	this.toqueJugador = function(){
		var distancia  = dist(this.x, this.y, jugador.x, jugador.y);
		return(distancia - this.r <= 0);
	}
	this.show = function(){
		if(this.x - this.r <= this.dueño.x){
			this.direccion = 4;
		} 
		if((this.x + this.r) >= (this.dueño.x + this.dueño.ancho * 2)){
			this.direccion = -4;
		}
		this.x += this.direccion;
		if(this.toqueJugador()){
			jugador.perder();
		}
		fill("black");
		ellipse(this.x,this.y, this.r * 2);
	}
}

function Nube(x,y,velocidad){
	this.x = x;
	this.y = y;
	this.velocidad = velocidad;
	this.tamaño = random(100,200);
	if(random(0,1) > 0.5){
		this.img = imgNube;
	}else{
		this.img = imgNube2;
	}
	this.show = function(){
		push();
		tint(255, 128);
		image(this.img, this.x, this.y, this.tamaño*2 ,this.tamaño);
		pop();
		this.x += this.velocidad;
		if(this.x > anchoG){
			this.tamaño = random(100,300);
			this.x = - this.tamaño * 2;
			this.y = random(jugador.y - 1500 , jugador.y );
			this.velocidad = 4 - this.tamaño / 100;
			var img;
			if(random(0,1) > 0.5){
				this.img = imgNube;
			}else{
				this.img = imgNube2;
			}
		}
	}
}

function Manzana(x,y){
	this.r = 20;
	this.x = x ;
	this.y = y - this.r * 2;
	this.comida = false;

	this.show = function(){
		if((this.toqueJugador()) &&(!this.comida)){
			jugador.velocidad = -80;
			this.comida = true;
		}
		if(!this.comida){
			fill("green");
			ellipse(this.x,this.y,this.r*2);
		}
	}

	this.toqueJugador = function(){
		var distancia  = dist(this.x, this.y, jugador.x, jugador.y);
		return(distancia - this.r - jugador.r <= 0);
	}
}