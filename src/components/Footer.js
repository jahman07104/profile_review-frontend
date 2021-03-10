import React from 'react';

function Footer(props) {
  return(
    <footer className ="container d-flex text-white py-2">
      <p>Copyright{props.year}</p>
      <div className="ml-auto">
      
        <a className="d-block text-white" href="www.google.com" >Terms of use</a> 
      </div>
    </footer>
  );
}

export default Footer;