var commentsController = require('./../controllers/comments.js');
var postsController = require('./../controllers/posts.js');

module.exports = {
  init: function(app) {
    app.get('/heartbeat', function(req,res) {
      res.send("It's alive");
    });

    app.get('/api/comments',     commentsController.index);
    app.get('/api/comments/:id', commentsController.show);
    app.post('/api/comments',    commentsController.create);
    app.put('/api/comments/:id', commentsController.update);
    app.del('/api/comments/:id', commentsController.destroy);

    // Post getting
    app.get('/api/posts', postsController.index);
    app.get('/api/posts/:id', postsController.show);
  }
};