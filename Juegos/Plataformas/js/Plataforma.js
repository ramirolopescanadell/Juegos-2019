
function Plataforma(x,y,ancho,altura,id,tipo,img){
	this.x = x;
	this.y = y;
	this.ancho = ancho;
	this.altura = altura;
	this.id = id;
	this.tipo = tipo;
	this.img = img;
	if(this.tipo == 0){
		this.movimiento = false;
		this.direccion = 2;
		this.rota = false;
		this.caida = 0;
		this.tengoSegunda = false;
		this.tengoBicho = false;
		this.tengoFruta;
		this.fruta;
		this.bicho;
		this.segundaPlataforma = new Plataforma(this.x + anchoP, this.y, anchoP, altoP, id,1,imgPlataforma);
	}
	if(this.id == 0){
		this.ant = cantPlataformas - 1;
	}else{
		this.ant = this.id - 1;
	}

	this.posicionar = function(){
		if(this.id == 0){
			this.altura = altoP;
			this.ancho = anchoP;
			this.img = imgPlataforma;
		}
		this.x = random(0, anchoG- 200);
		this.y = plataformas[this.ant].y -distancia;
		this.rota = (1 == floor(random(0,5)));
		this.movimiento = (1 == floor(random(0,3)));
		if ((!this.rota) && (!this.movimiento) && (this.x + this.ancho * 2 < anchoG) &&(this.id % 2 == 0)){
			this.tengoSegunda = true;
			this.segundaPlataforma.x = this.x + this.ancho;
			this.segundaPlataforma.y = this.y;
			this.tengoBicho = true;
			this.bicho = new Bicho(this);
		}else{
			this.tengoSegunda = false;
			this.tengoBicho = false;
		}
		if ((!this.rota) && (!this.movimiento) && (!this.tengoSegunda)){
			this.tengoFruta = (1 == floor(random(0,5)));
			if(this.tengoFruta){
				this.fruta = new Manzana(this.x + this.ancho/2,this.y);
			}
		}
		this.caida = 0;
	}

	this.show = function(){
		if(this.tipo == 0){
			if((this.y > jugador.y + alturaG / 1.5) && (plataformas[this.ant].y < jugador.y)){
				this.posicionar();
			}
		}
		//movimiento
		if((this.movimiento) &&(this.caida == 0)){
			if(this.x + this.ancho >= anchoG){
				this.direccion = -2;
			}
			if(this.x <= 0){
				this.direccion = 2;
			}
			this.x += this.direccion;
		}
		if(this.rota){
			this.y += this.caida;
			image(imgRota, this.x, this.y, this.ancho, this.altura);
		}else{
			image(this.img, this.x, this.y, this.ancho, this.altura);
			if(this.tengoSegunda){
				this.segundaPlataforma.show();
				if(this.tengoBicho){
					this.bicho.show();
				}
			}else if(this.tengoFruta){
				this.fruta.show();
			}
		}
	}

	this.caer = function(){
		this.caida = 30;
	}
}