import React from"react"
import {Link, useLocation, Outlet} from "react-router-dom"

export function Home() {

  return(
    <div>
      <h1>[Company Website]</h1>
      <nav>
        <div>
        <Link to="about">About</Link>
        </div>
        <div>
        <Link to="events">Ratings</Link>
        </div>
        
      </nav>
    </div>
  );
}

export function About() {

  return(
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
}

export function Rating() {

  return(
    <div>
      <h1>[Rating]</h1>
    </div>
  );
}

export function Whoops404() {
  let location = useLocation();
  console.log(location)

  return (
    <div>
      <h1>Resource not found at {location.pathname}! </h1>
    </div>
  )
}


// import React from 'react';

// export function Home() {
//   return(
//     <div>
//     < h1>Company Site</h1>
//     </div>
//   );
// }


// export function About() {
//   return(
//     <div>
//     < h1>About</h1>
//     </div>
//   );
// }


// export function Ratings() {
//   return(
//     <div>
//     < h1>Ratings</h1>
//     </div>
//   );
// }