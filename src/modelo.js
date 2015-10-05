function Tablero(numeroCasillas){
	this.nombre="Tablero"
	this.casillas=[]
	this.numeroCasillas=numeroCasillas
	this.agregarCasilla=function(casilla,pos){
		this.casillas[pos]=casilla
	}
	this.iniciarTablero=function(){
		for(i=0;i<this.numeroCasillas;i++){
			this.casillas[i]=new Casilla(i)
		}
	}
	this.asignarTema=function(casilla,tema){
		casilla.asignarTema(tema)
	}

	this.obtenerCasilla=function(posicion){
		return this.casillas[posicion]
	}

	this.iniciarTablero()
}

function Casilla(posicion){
	this.posicion=posicion
	this.tema=undefined
	this.asignarTema=function(tema){
		this.tema=tema
	}
}

function Salida(){
	this.nombre="Salida"
}

function configurarTablero(tablero){
	casilla=tablero.obtenerCasilla(0)
	tablero.asignarTema(casilla,new Salida)
}

function iniJuego(){
	tablero=new Tablero(40)
	configurarTablero(tablero)
}
