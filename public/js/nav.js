var React = require('react');
var Link = require('react-router-dom').Link;

class Nav extends React.Component {

     constructor() {
       super();
     }

     render() {
       return (
        <div>

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/shop'}>Shop</Link>
                </li>

              </ul>
            </div>
          </nav>

        </div>
        );
      }
}

module.exports = Nav;
