var React = require('react');

var Nav = require('./nav');
var Slogan = require('./slogan');
var Desc = require('./desc');

class Home extends React.Component {

     constructor() {
       super();
     }

     render() {
       return (
         <div>
             <Nav/>
             <Slogan/>
             <Desc/>
         </div>
       );
     }
}

module.exports = Home;
