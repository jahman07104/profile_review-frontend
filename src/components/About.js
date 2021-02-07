import Navbar from './Navbar'
import Footer from'./Footer'

const About = () => {
  return ( 
    <>
    <div className="container">
      <Navbar title="profile viewer" icon="fab fa-forumbee"/>  
    <h3> this is my abouts page </h3>
 
  
  <div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div>
  < Footer year={new Date().getFullYear()}/>
  </div>
  </>
   );

}
 
export default About;