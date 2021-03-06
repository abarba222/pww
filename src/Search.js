import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Search() {
    return (
        <div className="searchStyles"> 
            <div className="search-content"> 
                <h2 className="search-text" aria-label="Providing insightful research, analysis, and resources to facilitate informed policy decisions and administration of services">Providing insightful research, analysis, and resources to facilitate informed policy decisions and administration of services</h2>
                <div className="search-input-section">
                    <input className="search-input" placeholder="Search rfa.sc.gov" aria-label="Search rfa.sc.gov"/>
                    <button className="search-apply" aria-label="search button">SEARCH<FontAwesomeIcon icon={faSearch} className="search-icon"></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    )
}
