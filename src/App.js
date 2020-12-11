import React from 'react';
import './App.css';
import Contact from './components/Contact';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <Contact 
      avatar="img random.jpg"
      name="Anita Sutton"
      online = {true}
      />
      <Contact 
      avatar="kirk.jpg"
      name="Kirk Fox"
      online = {false}
      />
      <Contact 
      avatar="herminia.jpg"
      name="Herminia Brown"
      online = {true}
      />
      <ContactList />
    </div>
  );
}

export default App;
