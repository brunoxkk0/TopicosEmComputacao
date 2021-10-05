const { Pessoa } = require("../src/atv4/pessoa");
const { definirFaixaEtaria } = require("../src/atv4/classificador");

describe('Testando Classificador', () => {

    test('Idade inválida - Acima 110', () => {
        let p = new Pessoa("Fulano", 111);
        expect(() => {definirFaixaEtaria(p)}).toThrowError('idade invalida')
    })

    test('Idade inválida - Igual Menor 0', () => {
        let p = new Pessoa("Fulano", 0);
        expect(() => {definirFaixaEtaria(p)}).toThrowError('idade invalida')
    })

    test('Criança', () => {
        let p = new Pessoa("Fulano", 2);
        expect(definirFaixaEtaria(p)).toBe('Fulano eh crianca')
    })

    test('Adolescente', () => {
        let p = new Pessoa("Fulano", 16);
        expect(definirFaixaEtaria(p)).toBe(p.getNome() + ' eh adolescente')
    })

    test('Adulta', () => {
        let p = new Pessoa("Fulano", 35);
        expect(definirFaixaEtaria(p)).toBe(p.getNome() + ' eh adulto')
    })

    test('Idosa', () => {
        let p = new Pessoa("Fulano", 80);
        expect(definirFaixaEtaria(p)).toBe(p.getNome() + ' eh idoso')
    })

})
