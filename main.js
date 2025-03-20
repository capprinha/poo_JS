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
} // função construtora

const palio = new Carro('Palio', 'Fiat', 2005, 2004) // herança

const nome = "luis"
const idade = 21
const maiorDe18 = true
const conhecimento = ['python', 'js', 'sass']

const pessoa = {
    nomeDaPessoa: nome,
    idadeDaPessoa : idade,
    maiorDeIdade : maiorDe18,
    conhecimentos : conhecimento
} // objeto comum 

console.log(typeof nome) // retorna o tipo do dado : str, int , float , true, false, object
console.log(palio instanceof Carro) // verifica se 'palio' é uma instancia de Carro
console.log(pessoa instanceof Carro) // não é uma instancia de Carro 

pessoa.sobrenome = 'cappra' //add chave e valor / ['sobrenome']

if ('sobrenome' in pessoa){
    console.log('a pessoa tem sobrenome')
}

Object.freeze(pessoa) // usado para congelar os valores do objeto / sem alterar

pessoa.nome = 'augusto' // objeto congelado ao tentar mudar o valor da chave retorna undefined

console.log(pessoa.nome)

console.log(Object.keys(pessoa)) // retorna as chaves do objeto em array // .length
console.log(Object.values(pessoa)) // retorna os valores das chaves do objeto em array