var Router   = require('react-router-dom').BrowserRouter;
var Route    = require('react-router-dom').Route;

var React = require('react');

var Home = require('./home');
var Shop = require('./shop');

class RouterFront extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <Router>
       <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
       </div>
      </Router>
    );
  }
}

module.exports = RouterFront;
