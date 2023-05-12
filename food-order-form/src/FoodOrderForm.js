import React, { useState } from "react";

function FoodOrderForm() {
    const [state, setState] = React.useState({
        name: "",
        phone: "",
        address: "",
        order: "",
    });

    function handleInput(e) {
        setState({
            ...state, [e.target.id]: e.target.value
        });
    }

    let inputs = ['name', 'phone', 'address', 'order'].map((el, i) => {
        return <div className='row'>
            <label key={"label_" + i} htmlFor={el}>{el}: </label>
            <input key={i} id={el} name={el} type="text" onChange={handleInput} value={state[el]} />
        </div>;
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        alert(`Order Successful!
        Your order was {order}.
        Please show your confirmation number for pickup.`);
    }

    return (
    <>
        <form>
            {inputs}

            <input type="submit" value="Submit Order" onSubmit={handleSubmit} />

        </form>
        
        <div>
            <h2>Current User Input: </h2>
            <h4>Name: {state.name}</h4>
            <h4>Address: {state.address}</h4>
            <h4>Phone: {state.phone}</h4>
            <h4>Order: {state.order}</h4>
        </div>
    </>

    );
}

export default FoodOrderForm;