import React from 'react'

export default function Icons() {
    return (
        <div className="iconStyles">
            <a href="/" className="icons">
                <img className="icon-image" src="assets/Data-Research-Icon.svg" />
                <div className="icon-label-container"><label className="icon-label">DATA & RESEARCH</label></div>
            </a>
            <a href="/" className="icons">
                <img className="icon-image" src="assets/Geography-Icon.svg" />
                <div className="icon-label-container"><label className="icon-label">GEOGRAPHY & MAPPING</label></div>
            </a>
            <a href="/" className="icons">
                <img className="icon-image" src="assets/Programs-Icon.svg" />
                <div className="icon-label-container"><label className="icon-label">PROGRAMS & SERVICES</label></div>
            </a>
            <a href="/" className="icons">
                <img className="icon-image" src="assets/Legislative-Icon.svg" />
                <div className="icon-label-container"><span className="icon-label">LEGISLATIVE FISCAL IMPACTS</span></div>
            </a>
        </div>
    )
}
