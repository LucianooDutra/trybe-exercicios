const express = require('express');

const activities = [
  {
    id: 1,
    description: 'Banho no cachorro',
    status: 'A fazer',
  },
  {
    id: 2,
    description: 'Cortar a grama',
    status: 'A fazer',
  },
  {
    id: 3,
    description: 'Estudar JavaScript',
    status: 'Feito',
  },
];

const app = express();

app.use(express.json());

// criando nova rota com minha API = get
app.get('/myActivities', (req, res) => res.status(200).json({ activities }));

// Crie um endpoint do tipo GET com a rota /myActivities/:id, que possa listar uma atividade do array por id 
app.get('/myActivities/:id', (req, res) => {
  const { id } = req.params;
  let renderActive;

  for (let i = 0; i < activities.length; i += 1) {
    const activitie = activities[i];

    if (activitie.id === Number(id)) {
      renderActive = activitie;
    }
  }

  res.status(200).json({ renderActive });
});

// Crie um endpoint do tipo GET com a rota /myActivities, que possa listar todas as atividades do array 
app.get('/myActivities', (req, res) => res.status(200).json({ activities }));

// Crie um endpoint do tipo GET com a rota /filter/myActivities, que possa listar todas as atividades filtradas por status do array. A rota deve receber a informação por query e a chave deve-se chamar status. A chave status vai trazer consigo valor de Feito ou A fazer e o endpoint deve fazer o filtro das atividades
app.get('/filter/myActivities', (req, res) => {
  const { status } = req.query;
  let filteredActivities = activities;

  if (status) {
    filteredActivities = activities.filter((activity) => activity.status === status);
  }

  res.status(200).json({ activities: filteredActivities });
});

// pra fazer a verificação coloca http://localhost:3001/filter/myActivities?status=Feito
// ou
// http://localhost:3001/filter/myActivities?status=A%20fazer


// Crie um endpoint do tipo GET com a rota /search/myActivities, que possa listar todas as atividades filtradas por um termo específico do array. A rota deve receber a informação por query e a chave deve-se chamar q. A chave vai trazer consigo valor de 'cachorro' por exemplo, e o filtro deve trazer apenas as atividades com esse termo, se não encontrar, traga um array vazio.
app.get('/search/myActivities', (req, res) => {
  const { q } = req.query;
  let filteredActivities = [];
  // como quero que se não encontrar nenhuma palavra o meu retorno será nenhum valor, então coloco o array vazio, mas se quisesse que retornasse todos, colocaria a minha const activities.

  if (q) {
    filteredActivities = activities.filter((activity) => activity.description.includes(q));
  }

  res.status(200).json({ activities: filteredActivities });
});


module.exports = app;
