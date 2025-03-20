function Carro(modelo, fabricante, anoModelo, anoFabricacao){
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    this.acelerar = function(){
        console.log('vrumm')
    }
    this.batido = function(){
        console.log('bateu o carro')
    }
}

const palio = new Carro('Palio', 'Fiat', 2005, 2004)

console.log(palio)