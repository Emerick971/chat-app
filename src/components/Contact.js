import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
  constructor(props) {
    super (props);

  this.state = {
    online: props.online
  };
  }
    render(){
    return (
      <div className="Contact"  >
          
            <img className="avatar" src={this.props.avatar} alt={this.props.name} />
          <div className="status">
              <h3 className="name">{this.props.name}</h3>
              <div >
              <div onClick = {e => {
        const newOnline = !this.state.online;
        this.setState({ online: newOnline });
        }} className={this.state.online ? 'status-online' : 'status-offline'}>

              </div>
              <p className="status-text">{this.state.online ? 'online' : 'offline'}
              
              </p>
              </div>
          </div>
      </div>
    );
  }
}

  Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool.isRequired

  };
  
  export default Contact;