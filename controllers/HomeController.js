

module.exports = class HomeController{

  static async index(req, res) {
    res.render('main');
  }
  
};
