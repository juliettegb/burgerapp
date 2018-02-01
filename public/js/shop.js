var React = require('react');
var Nav = require('./nav');
var Burger = require('./burger');

class Shop extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Nav/>

        <div className="burgerList">
          <div className="container">
            <div className="row text-center">

              <Burger/>
              <Burger/>
              <Burger/>
              <Burger/>
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Shop;
