import React from 'react'

export default function Icons() {
    return (
        <div className="iconStyles">
            <a href="/" className="icons" aria-label="Data & Research">
                <img className="icon-image" src="assets/Data-Research-Icon.svg" alt="Data Research Icon"/>
                <div className="icon-label-container"><label className="icon-label">DATA & RESEARCH</label></div>
            </a>
            <a href="/" className="icons" aria-label="Geography & Mapping">
                <img className="icon-image" src="assets/Geography-Icon.svg" alt="Geography Icon" />
                <div className="icon-label-container"><label className="icon-label">GEOGRAPHY & MAPPING</label></div>
            </a>
            <a href="/" className="icons" aria-label="Programs & Services">
                <img className="icon-image" src="assets/Programs-Icon.svg" alt="Programs Icon"/>
                <div className="icon-label-container"><label className="icon-label">PROGRAMS & SERVICES</label></div>
            </a>
            <a href="/" className="icons" aria-label="Legislatie Fiscal Impacts">
                <img className="icon-image" src="assets/Legislative-Icon.svg" alt="Legislatie Icon"/>
                <div className="icon-label-container"><span className="icon-label">LEGISLATIVE FISCAL IMPACTS</span></div>
            </a>
        </div>
    )
}
