// const validateDescription = (req, res, next) => {
//   const { description } = req.body;

//   if (!description) {
//     return res.status(400).json(
//       { message: 'O campo description é obrigatório' },
//     );
//   }

//   if (!description.createdAt) {
//     return res.status(400).json(
//       { message: 'O campo createdAt é obrigatório' },
//     );
//   }

//   if (!description.rating) {
//     return res.status(400).json(
//       { message: 'O campo rating é obrigatório' },
//     );
//   }

//   if (!description.difficulty) {
//     return res.status(400).json(
//       { message: 'O campo difficulty é obrigatório' },
//     );
//   }

//   next();
// };


// ou posso utilizar a seguinte função pra diminuir a quantidade de linhas.

const validateDescription2 = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res.status(400).json(
      { message: `O campo ${value} é obrigatório` },
    );
  }
};

const validateDescription = (req, res, next) => {
  const { description } = req.body;

  return validateDescription2(description, res, 'description')
    || validateDescription2(description.createdAt, res, 'createdAt')
    || validateDescription2(description.rating, res, 'rating')
    || validateDescription2(description.difficulty, res, 'difficulty')
    || next();
};

module.exports = validateDescription;