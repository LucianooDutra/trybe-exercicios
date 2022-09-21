module.exports = async (req, res, next) => {
  try {
    const { user } = req;

    if(!user) {
      return res.status(401).json({ error: 'This endpoint requires authentication' });
    };
  
    if(!user.admin) {
      return res.status(403).json({ error: 'Restricted access' });
    };
    
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};