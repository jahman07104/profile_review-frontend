import React,{ Component }from 'react'
import Navbar from './Navbar';
import Footer from './Footer'


class Instructions extends Component {

  state = {
    name: '',
    email: '',
    phone: ''
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state)
  }

  onChange = e => this.setState({[e.target.name]: 
    e.target.value });


  render() {
    
    const { name, email, phone } = this.state;
    return (
      <>
      <div className="container">
            <Navbar title="profile viewer" icon="fab fa-forumbee"/>    
            <h3>This is the Profile submissions page.</h3>
            <p> Fill in below to submit a profile and upload your photo...</p>
      </div>
      <div className="card mb-3">
        <div className="card-header">Add 
        Profile</div>
          <div className="card-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                id="name"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                value={name}
                onChange={this.onChange}
              />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                type="email"
                id="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter email..."
                value={email}
                onChange={this.onChange}
              />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                type="text"
                id="phone"
                name="phone" 
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                value={phone}
                onChange={this.onChange}
              />
              </div>
                <input type="submit" value="Add Profile" 
                className="btn btn-light btn-block"/>
            </form>
          </div>      
      </div>
      <div style={{ borderTop: "2px solid #fff ", marginLeft: 2, marginRight: 2 }}></div>
      < Footer year={new Date().getFullYear()}/>
      </>
    );

   
  }
}

export default Instructions;