var User = require('./../models/post');

module.exports = {
  // GET
  index: function(req, res) {
    res.send(User.all());
  },
  // POST
  create: function(req, res) {

  },
  // PUT
  update: function(req, res) {
    res.send(User.update( req.params.id, req.params.body))
  },
  // DELETE
  destroy: function(req, res) {

  },
  // GET
  show: function(req, res) {
    res.json( User.find( req.params.id) );
  }
};