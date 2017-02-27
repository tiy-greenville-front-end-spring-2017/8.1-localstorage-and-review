var Backbone = require('backbone');

var MenuItem = Backbone.Model.extend({

});

var MenuCollection = Backbone.Collection.extend({
  model: MenuItem
});

module.exports = {
  MenuItem,
  MenuCollection
};
