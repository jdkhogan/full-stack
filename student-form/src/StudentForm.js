
import React, { useState } from "react";

function StudentForm() {
    const [state, setState] = React.useState({
        firstName: "",
        lastName: "",
        age: "",
        address: "",
        homeroom: "",
        ID: "",
        foodOptions: "Extra Sloppy Joe"
    });

    function handleUserInput(e) {
        setState({
            ...state, [e.target.name]: e.target.value
        });
    }
    
    let numberFields = ['age', 'homeroom', 'ID'].map(el => {
        return <div><label for={el}>{el}: </label><input name={el} type="number" min="0" onChange={handleUserInput} value={state.el} /></div>
    });

    function buildRadio(name, options) {
        return options.map(option => {
            return <><input type="radio" id={option.id} name={name} value={option.val} checked={state.name === option.val}
            onChange={handleUserInput} /><label for={option.id}>{option.val}</label></>
        });
    }

    const foodOptions = [
        {
            id: 'food_option_1', 
            val: 'Extra Sloppy Joe'
        },
        {
            id: 'food_option_2', 
            val: 'Weird Square Pizza'
        },
        {
            id: 'food_option_3', 
            val: 'Sad Lumps in Sad Gravy'
        },
    ];

    return (
        <>
            <div>
                <h2>Add student data.</h2>
                <form>
                    <div>
                        <label for="firstName">First Name: </label>
                        <input name="firstName" type="text" onChange={handleUserInput} value={state.firstName} />
                        
                        <label for="lastName">Last Name: </label>
                        <input name="lastName" type="text" onChange={handleUserInput} value={state.lastName} />
                    </div>
                    
                    <div>   
                        <label for="address">Address: </label>
                        <input name="address" type="text" onChange={handleUserInput} value={state.address} />
                    </div>

                    {numberFields}
                    
                    <div>
                        {buildRadio('foodOptions', foodOptions)}
                    </div>
                </form>
            </div>
            <div>
                <h2>Current User Input: </h2>
                <h4>Student ID: {state.ID}</h4>
                <h4>Name: {state.firstName} {state.lastName}</h4>
                <h4>Age: {state.age}</h4>
                <h4>Address: {state.address}</h4>
                <h4>Homeroom Class Number: {state.homeroom}</h4>
                <h4>FAVORITE Food: {state.foodOptions}</h4>
            </div>
        </>
    );
}

export default StudentForm;