const chai = require('chai'); // importo o chai, trabalha com os expects
const chaiHttp = require('chai-http');
// plugin Chai HTTP! Com esse plugin poderemos simular uma request a nossa API, trabalha com requests

const sinon = require('sinon'); // DUBLÊ DE TESTE
const fs = require('fs'); // DUBLÊ DE TESTE

const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp); // como um merge dos 2 em 1 só. chai com chaiHttp

// mockFile DUBLÊ de TEST
// stringify porque o fs ler como uma string
const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
  "nextChocolateId": 5
  });

  // console.log(mockFile);

describe('Testando a API Cacao Trybe', function () {

  // criando dublê de test
  // usamos o sinon criar um stub para a função readFile(), que retornará o mockFile contendo todo os dados que estavam no arquivo CacaoTrybeFile.json, conforme especificamos na chamada para resolves.
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile').resolves(mockFile);
    // sinon.stub(fs.promises, 'writeFile').resolves();
    // todas as vez que meu teste for ser realizada, ele irá chamar o dublê sinon.stub
    // tirando do fs, o promises, usando o readFile
    // finja que faça o resolves do mockFile
    // assim ao invés de pegar meus dados do banco de dados real, ele pega os dados da minha const mockFile
  });
  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolates', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];

      const response = await chai.request(app).get('/chocolates');
      // posso utilizar qualquer metodo, get, post, put, delete...
      // EXEMPLO: const response = await (await chai.request(app).post('/chocolates')).send({ name: 'Black', brandId: 21 });
      // PRA O EXPECT: expect(response.body.chocolates).to.deep.equal({
      //   id: 5,
      //   name: 'Black',
      //   brandId: 21
      // });
      //  utilizamos o método request, que foi adicionado ao chai através do plugin. Por tanto, ele nos permite chamar diretamente nossos endpoints, simulando chamadas HTTP.
      // Internamente, esse método já se encarrega de acessar a API e percorrer o pipeline daquele endpoint no Express, até conseguir os dados da resposta.

      // iremos verificar se o código HTTP retornado corresponde ao valor esperado
      expect(response.status).to.be.equal(200);
      // validamos se o corpo da mensagem corresponde a lista com todos os chocolates cadastrados na API
      expect(response.body.chocolates).to.deep.equal(output);
      // utilizamos o comando to.deep.equal ao invés do to.be.equals. 
      // Do outro modo, essa validação não seria possível, pois não seria realizada a comparação em profundidade.
    });
  });

  describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const output = [
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        }];

      const response = await chai.request(app).get('/chocolates/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const output = [
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]

      const response = await chai.request(app).get('/chocolates/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolates/total', function () {
    it('retornar a quantidade de tipos de chocolates que existem na base de dados!', async function () {
      const output =
        {
          "totalChocolates": 4 // quantidade de chocolates na base de dados
        };

      const response = await chai.request(app).get('/chocolates/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(output);

    });
  });

  describe('testes de integração para o endpoint GET /chocolates/search', function () {
    it('retornar os chocolates que contém uma determinada palavra em seu nome', async function () {
      const output = [
        {
          id: 3,
          name: 'Mon Chéri',
          brandId: 2,
        },
        {
          id: 4,
          name: 'Mounds',
          brandId: 3,
        },
      ];

      const response = await chai.request(app).get('/chocolates/search?name=mo');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal(output);
    });

    it('Retorna um array vazio ao não encontrar nenhum chocolate', async function () {
      const response = await chai.request(app).get('/chocolates/search?name=ZZZ');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal([]);
    });
  });

  describe('Usando o método PUT em /chocolates/:id', function () {
    it('Atualiza um chocolate existente', async function () {
      const response = await chai.request(app).put('/chocolates/1').send({
        name: 'Mint Pretty Good',
        brandId: 2,
      });

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 1,
        name: 'Mint Pretty Good',
        brandId: 2,
      });
    });
      
    it('Se o chocolate não existe, gera um erro', async function () {
      const response = await chai.request(app).put('/chocolates/555').send({
        name: 'Mint Pretty Good',
        brandId: 2,
        });
      
      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({
        message: 'chocolate not found',
      });
    });
  });

});





// teste simples sem fazer o TDD antes da função em si do projeto.
// EX:

// const { expect } = require('chai'); // importo o expect do chai pra fazer o teste em si

// const calculaSituação = require('../../....'); // Importo a função que quero testar

// describe('Descrição geral dos meus testes', function () {
//   it('Descrição do meu teste especifico', function() {

//     const resposta = calculaSituação(4); // chamo minha função que quero testar e passo um valor de teste

//     expect(resposta).to.be.equals('reprovação'); // faço a comparação do valor que passei pra resposta retornada do teste e verifico se passa ou não meu teste.
//   });
// });
