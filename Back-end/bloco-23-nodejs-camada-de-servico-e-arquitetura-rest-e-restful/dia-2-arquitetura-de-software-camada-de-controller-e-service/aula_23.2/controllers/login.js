
const login = (req, res, next) => {
  try {
    const { username, password } = req.body;


  } catch (error) {
    next(error);
  }
}
module.exports = {
  login,
}
