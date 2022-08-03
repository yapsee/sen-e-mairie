module.exports = function(app) {
  const Ctrl = require('./weddings.controller');
  app.route('/mariages')
  .get(Ctrl.listAllWeddings)
  .post(Ctrl.addWedding);


  app.route('/mariages/:registe_number')
    .get(Ctrl.findOne)
    
};