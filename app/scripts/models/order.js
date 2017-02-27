var Backbone = require('backbone');
Backbone.LocalStorage = require("backbone.localstorage");

var OrderItem = Backbone.Model.extend({
  defaults: {
    'qty': 1
  }
});

var OrderItemCollection = Backbone.Collection.extend({
  model: OrderItem
});

var Order = Backbone.Model.extend({
  defaults: function(){
    return {
      'nickname': '',
      'delivery_address': '123 Main St.',
      items: new OrderItemCollection()
    }
  },
  urlRoot: 'https://tiny-lasagna-server.herokuapp.com/collections/thai',
  initialize: function(config){
    this.set('items', new OrderItemCollection(config.items));
  },
  parse: function(data){
    data.items = new OrderItemCollection(data.items);
    return data;
  },
  localStorage: new Backbone.LocalStorage("Order")
});

var OrderCollection = Backbone.Collection.extend({
  model: Order
});

module.exports = {
  OrderItem,
  OrderItemCollection,
  Order,
  OrderCollection,
};
