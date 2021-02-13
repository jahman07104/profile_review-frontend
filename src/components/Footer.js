import React from 'react';

function Footer(props) {
  return(
    <footer class ="container d-flex text-white py-2">
      <p>Copyright{props.year}</p>
      <div class="ml-auto">
        <a class="d-block text-white" href="#">Terms of use</a>
      </div>
    </footer>
  );
}

export default Footer;