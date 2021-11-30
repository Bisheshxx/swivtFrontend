import React from 'react'
import Datamap from './Datamap'

function Homepage() {
    
    return (
        <div className="homepage">
            <input name="searchBar"  placeholder="Search.."></input>
            <div className="results">
                <Datamap/>
            </div>
        </div>
    )
}

export default Homepage
