import React from 'react';

const Uni = ({ item }) => {
    const {web_pages, country, name} = item;
    
    return name ? (
        <div className='uni-container'>
            <div className='uni-details'>
                <h3 className='uni-name'>{name}</h3>
                <p><a href={web_pages[0]} className="uni-website">University website</a> Country: {country}</p>
            </div>
            {/* TODO: Add btn to move a uni from UniList to Shortlist */}
            {/* TODO: Add btn to remove a uni from Shortlist */}
        </div>
    ) : <p> No universities found... </p>
}


export default Uni;