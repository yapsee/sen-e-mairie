module.exports = function(app) {
  const Ctrl = require('./births.controller');
  app.route('/naissances/')
      .get(Ctrl.listAllbirths)
      .post(Ctrl.addBirth);

  app.route('/naissances/:registe_number')
    .get(Ctrl.findOne)
};