const fs = require('fs').promises; // metodo fs utilizado pra ler o arquivo de modo assincrono
// vem com o node
const { join } = require('path'); // vem com o node

// função responsável por acessar o arquivo de cacaoTrybeFIle.json, independentemente da rota, pra trazer todo o conteúdo que contem dentro dele.
const readCacaoTrybeFile = async () => {
  const path = '/files/cacaoTrybeFile.json'; // local do meu arquivo com os dados
  try { // caso de ok
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    // const que ler os dados de dentro do arquivo de cacaoTrybeFIle.json de modo assincrono
    // __dirname nome do diretorio que quero pegarApi, no caso o path
    // join, junta tudo entre ()
    return JSON.parse(contentFile);
    // fs.readFIle retorna uma string, por isso faz o parse
    // JSON.parse() recebe uma string JSON e a transforma em um objeto JavaScript.
    // JSON.stringify() recebe um objeto JavaScript e o transforma em uma string JSON.
  } catch (error) { // caso de error
    console.log('erro ao ler o arquivo', error.message);
    return null;
  }
};

// função que escreve um novo chocolate no meu array
const writeCacaoTrybeFile =  async (contentFile) => {
  const path = '/files/cacaoTrybeFile.json';
  try {
    await fs.writeFile(join(__dirname, path), JSON.stringify(contentFile));
  } catch (error) {
    console.log('erro ao ler o arquivo', error.message);
    return null;
  }
};

// função getAllChocolates() depende da leitura do arquivo CacaoTrybeFile.json para retornar a lista de todos os chocolates.
const getAllChocolates = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates;
};

// função getAllChocolates() depende da leitura do arquivo CacaoTrybeFile.json para retornar a lista de chocolates de acordo com det id passado.
const getChocolateById = async (id) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.filter((chocolate) => chocolate.id === id);
};

// função getAllChocolates() depende da leitura do arquivo CacaoTrybeFile.json para retornar a lista de chocolates pelo brandId.
const getChocolatesByBrand = async (brandId) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  return cacaoTrybe.chocolates.filter((chocolate) => chocolate.brandId === brandId);
};

// função getAllChocolates() depende da leitura do arquivo CacaoTrybeFile.json para retornar a lista de todos os chocolates e no final vejo quantos contem com length.
const getAllChocolatesLength = async () => {
  const cacaoTrybe = await readCacaoTrybeFile();
  // console.log(cacaoTrybe.chocolates.length);
  return cacaoTrybe.chocolates.length;
};

// função getAllChocolates() depende da leitura do arquivo CacaoTrybeFile.json para retornar a lista de todos os chocolates e no final vejo quantos contem com length.
const getAllChocolatesName = async (query) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  // console.log(cacaoTrybe.chocolates);
  const filtro = cacaoTrybe.chocolates.filter((chocolate) => chocolate.name.toLowerCase().includes(query));
  // console.log(filtro);
  return filtro;
};

const updateChocolate = async (id, update) => {
  const cacaoTrybe = await readCacaoTrybeFile();
  const chocolateToUpdate = cacaoTrybe.chocolates.find(
    (chocolate) => chocolate.id === id,
  );

  if (chocolateToUpdate) {
    cacaoTrybe.chocolates = cacaoTrybe.chocolates.map((chocolate) => {
        if (chocolate.id === id) return { ...chocolate, ...update };
        return chocolate;
      });
  
    await writeCacaoTrybeFile(cacaoTrybe);
    return { ...chocolateToUpdate, ...update };
  }

  return false;
};

// função que escreve um novo chocolate no meu array TESTE
// const createChocolate = async (name, brandId) => {
//   const cacaoTrybe = await readCacaoTrybeFile();

//   const newChocolate = { id: cacaoTrybe.nextChocolateId, name, brandId };
//   cacaoTrybe.chocolates.push(newChocolate);
//   cacaoTrybe.nextChocolateId += 1; // como um auto increment do banco
//   await writeCacaoTrybeFile(cacaoTrybe);

//   return newChocolate;
// };

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getAllChocolatesLength,
  getAllChocolatesName,
  updateChocolate,
};