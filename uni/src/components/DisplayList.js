// Parking Lot: Add CLEAR btn to remove search query and display all universities 

import Uni from './Uni';
import React, { useState } from 'react';

const DisplayList = ({ items, title }) => {
    return (
        <div className='uni-list'>
            <h2 className='uni-title'>{title}</h2>
            {items.map((item, i) => {
                return <Uni item={item} key={i}/>
                

            })}
        </div>
    );
}

export default DisplayList;

// TODO: On adding item to ShortList, that item should be removed from UniList 
// TODO: When running a new search, if an item is in ShortList, that item should be removed from UniList 