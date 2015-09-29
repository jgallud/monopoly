function Tablero(){
	this.nombre="Tablero"
	this.casillas=[]
	this.agregarCasilla=function(casilla,pos){
		this.casillas[pos]=casilla
	}
}

function Casilla(posicion,tema){
	this.posicion=posicion
	this.tema=tema
}

