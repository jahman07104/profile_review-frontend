import Navbar from './Navbar'
import Footer from'./Footer'
import { Link } from "react-router-dom"

const About = () => {
  return ( 
    <>
    <div className="container">
      <Navbar title="profile viewer" icon="fab fa-forumbee"/>  
    

      <div class="d-block text-white" >
      <Link to="/" className="d-block text-white">Home</Link>
      </div>

      <div >
      <Link to="Instructions" className="d-block text-white">Instructions</Link>
      </div>
  

      <h1> This will be the  Abouts page </h1>



      
  <div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div>
  < Footer year={new Date().getFullYear()}/>
  </div>
  </>
   );

}
 
export default About;