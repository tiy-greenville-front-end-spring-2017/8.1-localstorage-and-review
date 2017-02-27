var React = require('react');

var MenuCollection = require('../models/menu.js').MenuCollection;
var Order = require('../models/order.js').Order;

class MenuContainer extends React.Component {
  // getInitialState(){
  //
  // }
  constructor(props) {
    super(props);  // React.Componet.prototype.constructor.apply(this, arguments);

    var menuCollection = new MenuCollection();
    menuCollection.add([
      {'_id': 1, 'name': 'Pad Thai', 'price': 1150},
      {'_id': 2, 'name': 'Soup', 'price': 950}
    ]);

    var orderData = JSON.parse(localStorage.getItem('order'));
    var order = new Order(orderData);

    this.state = {
      menuCollection,
      order
    };
  }
  addItemToOrder(menuItem) {
    var order = this.state.order;

    var orderItem = menuItem.toJSON();
    // delete orderItem._id;
    order.get('items').add(orderItem);

    localStorage.setItem('order', JSON.stringify(order.toJSON()));

    this.setState({order});
  }
  placeOrder() {
    this.state.order.save();
  }
  render() {
    // the this that is here

    var menuList = this.state.menuCollection.map(menuItem => {
      // is the same this as is here
      return (
        <li key={menuItem.cid}>
          <a
            onClick={(e)=>{e.preventDefault(); this.addItemToOrder(menuItem)}}
            href="#"
          >{menuItem.get('name')}</a>
        </li>
      );
    });

    var orderList = this.state.order.get('items').map((item) => {
      return (
        <li>{item.get('name')}</li>
      )
    });

    return (
      <div className="container">
        <div className="row">

          <div className="col-md-6">
            <ul>{menuList}</ul>
          </div>

          <div className="col-md-6">
            <ul>{orderList}</ul>
            <button onClick={() => {this.placeOrder()}} className="btn btn-warning">Place Order</button>
          </div>

        </div>
      </div>
    )
  }
}

module.exports = {
  MenuContainer
};
