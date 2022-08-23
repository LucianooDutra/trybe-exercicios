const express = require('express');
const {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  getAllChocolatesLength,
  getAllChocolatesName,
  updateChocolate,
} = require('./cacaoTrybe');

const app = express();

app.use(express.json());

app.get('/chocolates/brand/:brandId', async (req, res) => {
  const { brandId } = req.params;
  const chocolates = await getChocolatesByBrand(Number(brandId));
  res.status(200).json({ chocolates });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  const chocolates = await getAllChocolatesName(name);
  res.status(chocolates.length === 0 ? 404 : 200).json( chocolates );
});

app.get('/chocolates/total', async (req, res) => {
  const chocolates = await getAllChocolatesLength();
  res.status(200).json({ totalChocolates: chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  // Usamos o Number para converter o id em um inteiro
  const chocolate = await getChocolateById(Number(id));
  res.status(200).json({ chocolate });
});

app.put('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const { name, brandId } = req.body;
  // Usamos o Number para converter o id em um inteiro
  const updatedChocolate = await updateChocolate(Number(id), {name, brandId});

  if (updatedChocolate) return res.status(200).json({ chocolate: updatedChocolate });
  res.status(404).json({ message: 'chocolate not found' });
});

app.get('/chocolates', async (req, res) => {
  const chocolates = await getAllChocolates();
  res.status(200).json({ chocolates });
});

module.exports = app;