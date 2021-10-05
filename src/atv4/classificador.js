
function definirFaixaEtaria(pessoa){

    if(pessoa.getIdade() <= 0 || pessoa.getIdade() >= 110)
        throw Error('idade invalida')

    console.log(pessoa)

    let idade = pessoa.getIdade();
    let tipo;

    if(idade <= 11){
        tipo = 'crianca';
    }else if(idade <= 18){
        tipo = 'adolescente';
    }else if(idade <= 59){
        tipo = 'adulto';
    }else{
        tipo = 'idoso';
    }

    return '' + pessoa.getNome() + ' eh ' + tipo;

}

exports.definirFaixaEtaria = definirFaixaEtaria;

