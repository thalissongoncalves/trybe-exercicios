const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');

const { expect } = chai;

chai.use(chaiHttp);

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
  });

describe('Testando a API Cacau Trybe', function () {
    beforeEach(function () {
        sinon.stub(fs.promises, 'readFile')
          .resolves(mockFile);
      });
    
      afterEach(function () {
        sinon.restore();
      });
    describe('Usando o método GET em /chocolates', function() {
        it('Retorna a lista completa de chocolates!', async function() {
          const response = await chai
              .request(app)
              .get('/chocolates'); /* Aqui, utilizamos o método request, que foi adicionado ao chai por meio do plugin. 
              Por tanto, ele nos permite chamar diretamente nossos endpoints, simulando chamadas HTTP. */
          const output = [
                { id: 1, name: 'Mint Intense', brandId: 1 },
                { id: 2, name: 'White Coconut', brandId: 1 },
                { id: 3, name: 'Mon Chéri', brandId: 2 },
                { id: 4, name: 'Mounds', brandId: 3 },
          ];
          expect(response.status).to.be.equals(200);
          expect(response.body.chocolates).to.deep.equal(output) /* Você pode estar se perguntando: “Por que utilizamos o comando to.deep.equal ao 
          invés do to.be.equals?” 🤔
          Resposta: Nesse caso, precisamos utilizar o deep para garantir que todas as informações dentro do objeto retornado são as mesmas do 
          objeto esperado. Do outro modo, essa validação não seria possível, pois não seria realizada a comparação em profundidade. */
        })
    })
    describe('Usando o método GET em /chocolates/:id para buscar o ID 4', function () {
        it('Retorna o chocolate Mounds', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/4');
    
          expect(response.status).to.be.equal(200);
          expect(response.body.chocolate).to.deep.equal(
            {
              id: 4,
              name: 'Mounds',
              brandId: 3,
            });
        });
      });
    
      describe('Usando o método GET em /chocolates/:id para buscar o ID 99', function () {
        it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/99');
    
          expect(response.status).to.be.equal(404);
          expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
        });
      });
    
      describe('Usando o método GET em /chocolates/brand/:brandId para buscar brandId 1', function () {
        it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/brand/1');
    
          expect(response.status).to.be.equal(200);
          expect(response.body.chocolates).to.deep.equal([
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
          ]);
        });
      });

      describe('Usando o método GET em /chocolates/total para retornar o total de tipos de chocolates', function () {
        it('Retorna o total de tipos de chocolates existentes', async function () {
          const response = await chai
            .request(app)
            .get('/chocolates/total');
          
            expect(response.status).to.be.equal(200);
            expect(response.body).to.deep.equal([
              {
                totalChocolates: 4
              }
            ])
        })
      })
})