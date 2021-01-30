import React from 'react';

const card = (props) => {
  const avatar = `https://i.pravatar.cc/150?img=${props.avatarId}`; 
  return (
<div className="col-md-4">
        <div className="card">
          <img className="card-img-top" src={avatar} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">Some quick example text to build on the card title.</p>
              <a href="#" class="btn btn-primary">{props.email}{props.phone}</a>
              <a href="#" class="btn btn-primary">rating here..??</a>
            </div>
          </div>
        </div>
  );
}


export default card;