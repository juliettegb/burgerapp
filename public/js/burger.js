var React = require('react');
var Link = require('react-router-dom').Link; // ou var Link = ReactRouterDOM.Link;

class Burger extends React.Component {

     constructor() {
       super();
     }

     render() {
       return (

         <div className="card offset-2 col-8 offset-sm-1 col-sm-3">
           <img className="card-img-top" src="https://lacapsule.academy/wks2/burger_1.png"/>
         <div className="card-body">
           <h4 className="card-title">Burger Gourmet</h4>
           <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <Link to ="#" className="btn btn-warning">Add</Link>
         </div>
         </div>
       );
     }
}

module.exports = Burger;
