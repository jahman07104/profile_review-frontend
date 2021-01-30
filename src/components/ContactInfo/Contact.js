import React, { Component } from 'react'

 class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({type: 'DELETE_CONTACT', payload: id});

    // removed after context ** => this.props.deleteClickHandler()
};
 // static proptypes = {
  // contact: PropType.objectisRequired,
  // };

  // onShowClick() {
  //   console.log(this.state)
  // }

  // we can avoid all the bind stuff by using an arrow function as below
  // we can also use e.target for forms amd input
// we can incorporate this funtion in the onclick method on line 33
  // onShowClick =  e => {
  //   this.setState({showContactInfo:
  //   !this.state.showContactInfo});
  // };
  render() {
    const{ contact } = this.props;
    const{ showContactInfo } =this.state;
      return (
        
              {value => {
                const { dispatch } = value;
                return (
                <div className="card card-body mb-3" >
                  <h4>
                    {contact.name} 
                    <i onClick={() => 
                      this.setState({
                      showContactInfo:
                      !this.state.showContactInfo})
                    }
                        // to change state we have to use bind  to bind this to the onShowClick function as it is a custom function that I made..this is how we can use this..we can also make a constructor and bind up there
                      className="fas fa-sort-down" 
                      style={{cursor: 'pointer'}}  
                      />
                    < i
                      className="fas fa-times"
                      style={{ cursor: 'pointer', float:
                      'right', color: 'red' }}
                      onClick={this.onDeleteClick.bind(this, dispatch)
                      }
                    />
                    </h4>
                    {showContactInfo ? ( <ul className="list-group">
                    <li className="list-group-item">email: {contact.email}</li>
                    <li className="list-group-item">phone: {contact.phone}</li>
                    {/* <li className="list-group-item">id: {contact.id}</li> */}
              
                    </ul>) : null}
              </div> 
            );
        }}
    
    )
  }
}

// Contact.propTypes = {
//   contact: PropTypes.object.isRequired,
//   // also removed after contest ** => deleteClickHandler: PropTypes.func.isRequired
 
// };

export default Contact