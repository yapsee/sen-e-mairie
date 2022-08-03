module.exports = function(app) {
  const Ctrl = require('./demandes.controller');
  app.route('/demandes')
      .get(Ctrl.listAllDemandes)
      .post(Ctrl.addDemande)

  app.route('/demandes/:id')
      .put(Ctrl.traitement) 

   app.route('/user/demandes')
      .get(Ctrl.demandesByUser)
    
};