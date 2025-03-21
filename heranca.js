function Pessoa (nome){
    this.nome = nome
}

function Funcionario(nome, cargo, salario){
    Pessoa.call(this, nome) //herança de Pessoa
    this.cargo = cargo 
    let _salario = salario //valor privado

    this.getSalario = function(){
        return _salario
    }
    this.setSalario = function(valor){
        if( typeof _salario === 'number'){
            _salario = valor
        }
    }

}
const maria = new Pessoa('Maria')
const mariaFuncionaria = new Funcionario('Maria', 'dev-fullStack', 5500)
//console.log(maria)

console.log(mariaFuncionaria.getSalario())
mariaFuncionaria.setSalario(7000)
console.log(mariaFuncionaria.getSalario())