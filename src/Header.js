import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
// class Header extends React.Component {
    const [mainOpen, setMainOpen] = useState(false);

    const [searchOpen, setSearchOpen] = useState(false);

        return (
            <div className="headerStyles">
                <div className="fixed-container">
                    <div className="menu-container">
                        <button className="menu-button" onClick={() => setMainOpen(!mainOpen)}> 
                            {!mainOpen && (
                                <div>
                                    <FontAwesomeIcon icon={faBars} className="menu-icon"></FontAwesomeIcon>
                                    <span className="menu-text">menu</span>
                                </div>
                            )}
                            {mainOpen && (
                                <div>
                                    <FontAwesomeIcon icon={faTimes} className="menu-icon close"></FontAwesomeIcon>
                                    <span className="menu-text close">close</span>
                                </div>
                            )}
                        </button>
                    
                    {mainOpen && (
                        <div className="menu-dropdown">
                            <div className="nav-column-container main-nav">
                                <ul className="nav-column main-nav-column">
                                    <li className="nav-tabs main-nav-items"><a href="/">Home</a></li>
                                    <li className="nav-tabs main-nav-items"><a href="/">News & Events</a></li>
                                    <li className="nav-tabs main-nav-items"><a href="/">About Us</a></li>
                                    <li className="nav-tabs main-nav-items"><a href="/">Boards & Committees</a></li>
                                </ul>
                            </div>
                            <div className="nav-column-container">
                                <a href="/"><h2 className="column-titles">DATA & RESEARCH</h2></a>
                                <ul className="nav-column">
                                    <li className="nav-tabs"><a href="/">Economy</a></li>
                                    <li className="nav-tabs"><a href="/">Education</a></li>
                                    <li className="nav-tabs"><a href="/">Healthcare</a></li>
                                    <li className="nav-tabs"><a href="/">Local Government</a></li>
                                    <li className="nav-tabs"><a href="/">Population & Demographics</a></li>
                                    <li className="nav-tabs"><a href="/">Presentations</a></li>
                                    <li className="nav-tabs"><a href="/">State Finances</a></li>
                                    <li className="nav-tabs"><a href="/">Inflation Adjustments for Legal Proceedings</a></li>
                                </ul>
                                <a href="/"><h2 className="column-titles">LEGISLATIVE FISCAL IMPACTS</h2></a>
                                <ul className="nav-column">
                                    <li className="nav-tabs"><a href="/">Current General Assembly Session</a></li>
                                    <li className="nav-tabs"><a href="/">Previous General Assembly Session</a></li>
                                    <li className="nav-tabs"><a href="/">Forms</a></li>
                                </ul>
                            </div>
                            <div className="nav-column-container">
                            <a href="/"><h2 className="column-titles">GEOGRAPHY & MAPPING</h2></a>
                                <ul className="nav-column">
                                    <li className="nav-tabs"><a href="/">Transportation Carrier Network (Uber)</a></li>
                                    <li className="nav-tabs"><a href="/">SC Real Time Network</a></li>
                                    <li className="nav-tabs"><a href="/">SC State GIS</a></li>
                                    <li className="nav-tabs"><a href="/">Maps</a></li>
                                    <li className="nav-tabs"><a href="/">Interactive Mapping</a></li>
                                    <li className="nav-tabs"><a href="/">Statewide Aerial Imagery</a></li>
                                </ul>
                            </div>
                            <div className="nav-column-container">
                                <a href="/"><h2 className="column-titles">PROGRAMS & SERVICES</h2></a>
                                <ul className="nav-column">
                                    <li className="nav-tabs"><a href="/">Precinct Demographics and Redistricting</a></li>
                                    <li className="nav-tabs"><a href="/">State 911 Program</a></li>
                                    <li className="nav-tabs"><a href="/">Data Services and Online Soultions</a></li>
                                    <li className="nav-tabs"><a href="/">Geodetic Survey</a></li>
                                    <li className="nav-tabs"><a href="/">Fiscal Analysis</a></li>
                                    <li className="nav-tabs"><a href="/">2020 Census</a></li>
                                </ul>
                            </div>   
                        </div>
                    )}
                </div>
                <img src="assets/RFA Logo Final.png" alt="RFA Logo" className="header-icon"/>
                <h1 className="site-name">South Carolina <br/>Revenue And Fiscal Affairs Office<span className="site-slogan">Transforming data into solutions for South Carolina</span></h1>
                <div className="header-link-box">
                    <a href="https://rfa.sc.gov/about" className="header-links">ABOUT US</a>
                    <a href="https://rfa.sc.gov/calendar" className="header-links">EVENTS</a>
                    <a href="https://rfa.sc.gov/boards-committees" className="header-links">BOARDS & COMMITTEES</a>
                    <button className="search-button" onClick={() => setSearchOpen(!searchOpen)}> 
                            {!searchOpen && (
                                <div>
                                    <FontAwesomeIcon icon={faSearch} className="header-search"></FontAwesomeIcon>
                                </div>
                            )}
                            {searchOpen && (
                                <div>
                                    <FontAwesomeIcon icon={faSearch} className="header-search search-close"></FontAwesomeIcon>
                                </div>
                            )}
                    </button>
                    {searchOpen && (
                        <div className="search-dropdown">
                            <input placeholder="Enter search term" className="search-input" />
                            <button className="search-button-action">SEARCH</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
                    
        )
    //}
}

//export default Header;