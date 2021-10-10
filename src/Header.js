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
                        <button className="menu-button" onClick={() => setMainOpen(!mainOpen)} aria-label="menu"> 
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
                                    <li className="nav-tabs main-nav-items"><a href="/" aria-label="Home">Home</a></li>
                                    <li className="nav-tabs main-nav-items"><a href="/" aria-label="News & Events">News & Events</a></li>
                                    <li className="nav-tabs main-nav-items"><a href="/" aria-label="About Us">About Us</a></li>
                                    <li className="nav-tabs main-nav-items"><a href="/" aria-label="Boards & Committees">Boards & Committees</a></li>
                                </ul>
                            </div>
                            <div className="nav-column-container">
                                <a href="/"><h2 className="column-titles">DATA & RESEARCH</h2></a>
                                <ul className="nav-column">
                                    <li className="nav-tabs"><a href="/" aria-label="Economy">Economy</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Education">Education</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Healthcare">Healthcare</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Local Government">Local Government</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Population & Demographics">Population & Demographics</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Presentations">Presentations</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="State Finances">State Finances</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Inflation Adjustments for Legal Proceedings">Inflation Adjustments for Legal Proceedings</a></li>
                                </ul>
                                <a href="/" aria-label="LEGISLATIVE FISCAL IMPACTS"><h2 className="column-titles">LEGISLATIVE FISCAL IMPACTS</h2></a>
                                <ul className="nav-column">
                                    <li className="nav-tabs"><a href="/" aria-label="Current General Assembly Session">Current General Assembly Session</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Previous General Assembly Session">Previous General Assembly Session</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Forms">Forms</a></li>
                                </ul>
                            </div>
                            <div className="nav-column-container">
                            <a href="/" aria-label="GEOGRAPHY & MAPPING"><h2 className="column-titles">GEOGRAPHY & MAPPING</h2></a>
                                <ul className="nav-column">
                                    <li className="nav-tabs"><a href="/" aria-label="Transportation Carrier Network (Uber)">Transportation Carrier Network (Uber)</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="SC Real Time Network">SC Real Time Network</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="SC State GIS">SC State GIS</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Maps">Maps</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Interactive Mapping">Interactive Mapping</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Statewide Aerial Imagery">Statewide Aerial Imagery</a></li>
                                </ul>
                            </div>
                            <div className="nav-column-container">
                                <a href="/" aria-label="PROGRAMS & SERVICES"><h2 className="column-titles">PROGRAMS & SERVICES</h2></a>
                                <ul className="nav-column">
                                    <li className="nav-tabs"><a href="/" aria-label="Precinct Demographics and Redistricting">Precinct Demographics and Redistricting</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="State 911 Program">State 911 Program</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Data Services and Online Soultions">Data Services and Online Soultions</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Geodetic Survey">Geodetic Survey</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="Fiscal Analysis">Fiscal Analysis</a></li>
                                    <li className="nav-tabs"><a href="/" aria-label="2020 Census">2020 Census</a></li>
                                </ul>
                            </div>   
                        </div>
                    )}
                </div>
                <img src="assets/RFA Logo Final.png" alt="RFA Logo" aria-label="RFA Logo" className="header-icon"/>
                <h1 className="site-name" aria-label="South Carolina Revenue And Fiscal Affairs Office">South Carolina <br/>Revenue And Fiscal Affairs Office<span className="site-slogan" aria-label="Transforming data into solutions for South Carolina">Transforming data into solutions for South Carolina</span></h1>
                <div className="header-link-box">
                    <a href="https://rfa.sc.gov/about" className="header-links" aria-label="ABOUT US">ABOUT US</a>
                    <a href="https://rfa.sc.gov/calendar" className="header-links" aria-label="EVENTS">EVENTS</a>
                    <a href="https://rfa.sc.gov/boards-committees" className="header-links" aria-label="BOARDS & COMMITTEES">BOARDS & COMMITTEES</a>
                    <button className="search-button" onClick={() => setSearchOpen(!searchOpen)} aria-label="search icon"> 
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
                            <input placeholder="Enter search term" className="search-input" aria-label="search input"/>
                            <button className="search-button-action" aria-label="search button">SEARCH</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
                    
        )
    //}
}

//export default Header;