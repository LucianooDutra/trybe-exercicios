const service = require('./service');

describe ('testes do número aleatório', () => {

    afterEach(() => jest.clearAllMocks());

    it ("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
        service.randomNumber = jest.fn().mockReturnValue(10);
        service.randomNumber();

        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber()).toBe(10);

    });
    it ("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
        service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
        service.randomNumber(10, 2);

        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(1);
        expect(service.randomNumber).toHaveBeenCalledWith(10, 2);
        expect(service.randomNumber(10, 2)).toBe(5);

    });
    it ("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
        service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);
        service.randomNumber(2, 2, 2);
        service.randomNumber(2, 2, 2);

        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(2);
        expect(service.randomNumber).toHaveBeenCalledWith(2, 2, 2);
        expect(service.randomNumber(2, 2, 2)).toBe(8);

        // restaurei minha função mock, e refiz outro teste.
        service.randomNumber.mockReset();
        expect(service.randomNumber).toHaveBeenCalledTimes(0);

        service.randomNumber = jest.fn().mockImplementation((a) => a * 2);
        service.randomNumber(2);
        service.randomNumber(2);

        expect(service.randomNumber).toHaveBeenCalled();
        expect(service.randomNumber).toHaveBeenCalledTimes(2);
        expect(service.randomNumber).toHaveBeenCalledWith(2);
        expect(service.randomNumber(2)).toBe(4);
    });
    it ("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
        // 1- mockando função para receber um parâmetro e retornar em caixa baixa
        service.firstFunction = jest.fn().mockImplementation((str) => str.toLowerCase());
        // 2- mockando função que recebe um parâmetro e retorna a última letra
        service.secondFunction = jest.fn().mockImplementation((str) =>  str.charAt(str.length - 1));
        // 3- mockando função que recebe 3 parâmetros e os concatena
        service.thirdFunction = jest.fn().mockImplementation((str1, str2, str3) => str1.concat(str2, str3));

        // chamando as funções
        service.firstFunction('OLÁ MUNDO!');
        service.secondFunction('Olá mundo!')
        service.thirdFunction('olá', 'mundo', 'lindo!');

        // testando as funções
        // 1- função
        expect(service.firstFunction).toHaveBeenCalled();
        expect(service.firstFunction).toHaveBeenCalledTimes(1);
        expect(service.firstFunction).toHaveBeenCalledWith('OLÁ MUNDO!');
        expect(service.firstFunction('OLÁ MUNDO!')).toBe('olá mundo!');

        // 2- função
        expect(service.secondFunction).toHaveBeenCalled();
        expect(service.secondFunction).toHaveBeenCalledTimes(1);
        expect(service.secondFunction).toHaveBeenCalledWith('Olá mundo!');
        expect(service.secondFunction('Olá mundo!')).toBe('!');

        // 3- função
        expect(service.thirdFunction).toHaveBeenCalled();
        expect(service.thirdFunction).toHaveBeenCalledTimes(1);
        expect(service.thirdFunction).toHaveBeenCalledWith('olá', 'mundo', 'lindo!');
        expect(service.thirdFunction('olá', 'mundo', 'lindo!')).toBe('olámundolindo!');

        // restaurei minha 1° função mock, e refiz outro teste.
        service.firstFunction.mockRestore();
        expect(service.firstFunction).toHaveBeenCalledTimes(0);
        // expect(service.firstFunction('olá mundo!')).toBe('OLÁ MUNDO!');

    });
})

describe ('testando a requisição da API', () => {

    afterEach(() => jest.clearAllMocks());

    it ("testando requisição caso a promise resolva", async () => {
        service.fetchDog = jest.fn().mockReturnValue("request success");
        service.fetchDog();

        expect(service.fetchDog).toHaveBeenCalled();
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
        await expect(service.fetchDog()).toBe("request success");
        expect(service.fetchDog).toHaveBeenCalledTimes(2);
    });
    it ("testando requisição caso a promise seja rejeitada", async () => {
        service.fetchDog = jest.fn().mockReturnValue("request failed");
        service.fetchDog();

        expect(service.fetchDog).toHaveBeenCalled();
        expect(service.fetchDog).toHaveBeenCalledTimes(1);
        await expect(service.fetchDog()).toBe("request failed");
        expect(service.fetchDog).toHaveBeenCalledTimes(2);
    });
})