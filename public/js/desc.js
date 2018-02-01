var React = require('react');

class Desc extends React.Component {

     constructor() {
       super();
     }

     render() {
       return (
        <div>

          <section className="section-1">
            <div className="container">

              <div className="row text-center">

                <div className="col-sm-4">
                  <i className="fa fa-snowflake-o fa-5x" aria-hidden="true"></i>
                  <h2>Produits frais</h2>
                  <p>
                  Morbi in ultricies elit.
                  Aenean et velit molestie, posuere nulla nec, varius neque.
                  Sed eleifend, quam vel viverra molestie
                  </p>
                </div>

                <div className="col-sm-4">
                  <i className="fa fa-clock-o fa-5x" aria-hidden="true"></i>
                  <h2>Ouvert 7j/7</h2>
                  <p>
                  Morbi in ultricies elit.
                  Aenean et velit molestie, posuere nulla nec, varius neque.
                  Sed eleifend, quam vel viverra molestie
                  </p>
                </div>

                <div className="col-sm-4">
                  <i className="fa fa-cutlery fa-5x" aria-hidden="true"></i>
                  <h2>Saveurs étonnantes</h2>
                  <p>
                  Morbi in ultricies elit.
                  Aenean et velit molestie, posuere nulla nec, varius neque.
                  Sed eleifend, quam vel viverra molestie
                  </p>
                </div>

              </div>
            </div>

          </section>

        </div>
       );
     }
}

module.exports = Desc;
