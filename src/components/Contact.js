import React from 'react';
import './Contact.css';

function Contact() {
    return (
      <div className="Contact">
          
            <img className="avatar" src="img random.jpg" alt="random" />
          <div className="status">
              <h3 className="name">Anita Sutton</h3>
              <div className="status-online"></div>
              <p className="status-text">online</p>
          </div>
      </div>
    );
  }
  
  export default Contact;