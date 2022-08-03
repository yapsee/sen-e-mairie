module.exports = function(app) {
  const Ctrl = require('./demandes.controller');
  app.route('/demandes')
      .get(Ctrl.listAllDemandes)
      .post(Ctrl.addDemande)

  app.route('/demandes/:id')
      .put(Ctrl.traitement) 
      .get(Ctrl.findOne)

   app.route('/user/demandes')
      .get(Ctrl.demandesByUser)
    
};