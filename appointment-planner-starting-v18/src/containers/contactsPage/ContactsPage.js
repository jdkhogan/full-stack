import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const {contacts, addContact} = props;

  const [state, setState] = useState({
    name: "",
    phone: "",
    email: "",
    duplicate: false
  });

  function handleInput(e) {
    setState({
        ...state, [e.target.id]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  let inputs = ['name', 'phone', 'email'].map((el, i) => {
    return <div className='row'>
        <label key={"label_" + i} htmlFor={el}>{el.charAt(0).toUpperCase() + el.slice(1)}: </label>
        <input key={i} id={el} name={el} type="text" onChange={handleInput} value={contacts[el]} />
    </div>;
  });

  return (
    <div>
      <section>
        {inputs}
        <input type="submit" value="Add Contact" onSubmit={handleSubmit} />
        <div>
            <h2>Current User Input: </h2>
            <h4>Name: {state.name}</h4>
            <h4>Phone: {state.phone}</h4>
            <h4>Email: {state.email}</h4>
        </div>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
