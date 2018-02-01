var Router   = require('react-router-dom').StaticRouter;
var Route    = require('react-router-dom').Route;

var React = require('react');

var Home = require('./home');
var Shop = require('./shop');

class RouterBack extends React.Component {

  constructor() {
    super();
  }

  render() {
    var context = {};
    return (
      <Router location={this.props.url} context={context}> 
       <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/shop" component={Shop}/>
       </div>
      </Router>
    );
  }
}

module.exports = RouterBack;
