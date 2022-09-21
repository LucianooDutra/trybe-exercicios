
const me = async (req, res) => {
  try {
    const { username, admin } = req.user;

    res.status(200).json({ username, admin });
  } catch (err) {
    return res
      .status(500)
      .json({ message: 'Erro interno', error: err.message });
  }
};

module.exports = { me };