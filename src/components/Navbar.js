import React,{ Component } from 'react';
import { Link } from "react-router-dom";

class Navbar extends Component {
  static defaultProps = {
    title:'profile viewer',
    icon:'fab fa-forumbee'
  };

  render () {

    return ( 
      <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
          <h1> 
            <i className="fab fa-forumbee" /> {this.props.title}
          </h1>
          <div className="links">
            <div>
            <ul className="navbar-nav mr_auto">
              <li className="nav-item">        
                <Link className="nav-link" to="/">Home </Link>
              </li>
              {" | "}
              <li className="nav-item">              
                <Link className="nav-link" to="/Instructions">Instructions</Link>
              </li>  
              {" | "}            
              <li className="nav-item">              
                <Link className="nav-link" to="/about-this-app">About This App</Link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    );
  }
}

export default Navbar;