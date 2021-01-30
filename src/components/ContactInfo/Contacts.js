import React, { Component } from 'react'
import Contact from './Contact'



class Contacts extends Component {
  // we dont have to use a constructor
  // constructor() {
  //   super();
  //   this.state = {
    // state removed and put in new file called context

// } other end on line 9

// delete Contact removed from here after context created
  render() {
    return(
    
        { value => {
            const { contacts } = value;
            return (
                <>
              {value.contacts.map(contact => (
              <Contact
                key={contact.id}
                contact=
                {contact}
              // use {contact} instead of below
              // name={contact.name}
              // email={contact.email}
              // phone={contact.phone}
            />
        ))}
      </>
          );
        }}
    
    )
  }
}

export default Contacts;