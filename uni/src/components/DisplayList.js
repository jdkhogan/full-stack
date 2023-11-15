// Parking Lot: Add CLEAR btn to remove search query and display all universities 

import Uni from './Uni';
import React, { useState } from 'react';

const DisplayList = ({ setItems, items, title }) => {
    
    const handleToggle = (index) => {
        const newList = [...items];
        newList[index].shortlisted = !newList[index].shortlisted;
        setItems(newList);
    };

    const renderList = (listItems) => {
        return listItems.map(item => {
            return <>
                <div className="uni" key={item.id}>
                    <Uni key={item.id} item={item} />
                    {item.shortlisted ? 
                        <button onClick={() => handleToggle(item.id)} >&#10134;</button> : 
                        <button onClick={() => handleToggle(item.id)} >&#10133;</button>
                    }
                </div>
            </>
        });
    }

    return (
        <div className="wrapper">
            <div className="grid-left">
                { items && items.length > 0 
                    ? <div className='uni-list'>
                        <h2 className='uni-title'>{title}</h2>
                        {renderList(items.filter( item => item.shortlisted === false ))}
                    </div>
                    : <h4>Enter a search above to begin</h4>
                }
            </div>
            <div className="grid-right">
                { items && items.some(item => item.shortlisted === true) 
                    ? <div className='uni-list'>
                        <h2 className='uni-title'>{title}</h2>
                        {renderList(items.filter( item => item.shortlisted === true ))}
                    </div>
                    : <h4>Build your very own shortlist!</h4>
                }
            </div>
        </div>
    );
}

export default DisplayList;
