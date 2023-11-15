import React from 'react';

const Uni = ({ item }) => {
    const {web_pages, country, name} = item;
    
    return name ? (
        <div className='uni-container'>
            <div className='uni-details'>
                <h3 className='uni-name'>{name}</h3>
                <p><a href={web_pages[0]} className="uni-website">University website</a> Country: {country}</p>
            </div>
        </div>
    ) : <p> No universities found... </p>
}


export default Uni;