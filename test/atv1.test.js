const { gerarAleatorio }  = require('../src/atv1/atv1.js')

describe('Número aleatório', () => {

    test('Valor inicial negativo', () => {
        const result = gerarAleatorio(-1, 3);
        expect(result).toBe(-1)
    })

    test('Valor final negativo', () => {
        const result = gerarAleatorio(1, -1);
        expect(result).toBe(-1)
    })

    test('Valor inicial igual o final', () => {
        const result = gerarAleatorio(2, 2);
        expect(result).toBe(-1)
    })

    test('Valor no intervalo [200, 3000]', () => {
        const result = gerarAleatorio(200, 3000);
        expect(result >= 200 && result <= 3000)
    })

});
