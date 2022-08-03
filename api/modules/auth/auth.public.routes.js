module.exports = function(app){

  const Ctrl = require('./auth.controller')

  app.route('/users/login')
  .post(Ctrl.login);

  app.route('/users/signup')
  .post(Ctrl.register);

  app.route('/agents/signup')
  .post(Ctrl.registerAgent);

}