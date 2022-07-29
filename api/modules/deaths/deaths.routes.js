module.exports = function(app) {
  const Ctrl = require('./deaths.controller');
  app.route('/deces/')
      .get(Ctrl.listAllDeaths)
      .post(Ctrl.addDeath);

  app.route('/deces/:registe_number')
    .get(Ctrl.findOne)
};