var React = require('react');

class Slogan extends React.Component {

     constructor() {
       super();
     }

     render() {
       return (
        <div>

          <div className="home">
             <h1 className="bigTitle">Homemade burgers</h1>
             <p className="baseLine">L&rsquo;atelier du hamburger</p>
          </div>

        </div>
      );
     }
}

module.exports = Slogan;
