import React, {useState} from "react";
import StarRating from "./StarRating";

function AddProfile({ showProfileForm, setShowProfileForm }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');

  function handleProfileSubmit(e) {
    e.preventDefault()

    const data = {
        "profile": {
            "name": name,
            "email": email,
            "phone": phone,
            "city": city,
            "image": image
        }
    }

    fetch("http://localhost:4000/profiles", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(profile => {                    
          setShowProfileForm(!showProfileForm);
      })      
  }

  return (
      <div>
      { 
        showProfileForm ? (
            <div> 
            <h3>Submit Your Profile</h3>
        <form className="note-editor">
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="name"
                    className="form-control form-control-lg"
                    placeholder="Enter Name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input 
                    type="text"
                    id="phone"
                    name="phone"
                    className="form-control form-control-lg"
                    placeholder="Enter Phone Number..."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    id="email"
                    name="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="city">City</label>
                <input 
                    type="text"
                    id="city"
                    name="city"
                    className="form-control form-control-lg"
                    placeholder="Enter City..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </div>
            
            <div className="form-group">
                <label htmlFor="image">Image Link</label>
                <input 
                    type="text"
                    id="image"
                    name="image"
                    className="form-control form-control-lg"
                    placeholder="Enter Image Link..."
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                />
            </div>          
 
          <div className="button-row">            
              <button onClick={handleProfileSubmit} type="button">Submit Profile</button>              
          </div>
        </form>
            </div>        
      ) 
      : <div> Thank you for submitting your profile. Please visit home page for seeing all the profiles.</div> }
      </div>
  );
}

export default AddProfile;
