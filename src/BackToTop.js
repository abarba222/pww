import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function BackToTop() {
    const scrollToTop = () => {
        window.scrollTo ({
            top: 0,
            behavior: 'smooth'
        });
    };
    return (
        <div className="backToTopStyles">
            <button className="backToTopContainer" onClick={scrollToTop} aria-label="Back to Top">
                <label className="backToTop">Back to Top</label>
                <span className="btt-icon-container"><FontAwesomeIcon icon={faChevronUp} className="btt-icon"></FontAwesomeIcon></span>
            </button>
        </div>
    )
}
