
function gerarAleatorio(start, end){

    if(start < 0 || end < 0 || (start >= end))
        return -1

    let dif = (end - start) + 1;

    return start + (Math.random() * dif);

}

exports.gerarAleatorio = gerarAleatorio;
