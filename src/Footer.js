import React from 'react'

export default function Footer() {
    return (
        <div className="footerStyles">
            <div className="footer-column">
                <h2 className="footer-title">South Carolina<br />Revenue and Fiscal Affairs Office</h2>
                <img className="footer-image" src="assets/Group 262.png" alt="Revenue and Fiscal Affairs Office Logo"/>
            </div>
            <div className="footer-column">
                <ul className="footer-link-list">
                    <li className="footer-links">
                        <a href="" className="footer-link">Privacy Statement</a>
                    </li>
                    <li className="footer-links">
                        <a href="" className="footer-link">FOIA</a>
                    </li>
                    <li className="footer-links">
                        <a href="" className="footer-link">Disclosures and Reporting</a>
                    </li>
                    <li className="footer-links">
                        <a href="" className="footer-link">Report Fraud</a>
                    </li>
                    <li className="footer-links">
                        <a href="" className="footer-link">Accessibility</a>
                    </li>
                    <li className="footer-links">
                        <a href="" className="footer-link">Contact Us</a>
                    </li>
                    <li className="footer-links">
                        <a href="" className="footer-link"></a>
                    </li>
                </ul>
            </div>
            <div className="footer-column">
                <div className="addresses">
                    <h3 className="address-title">MAIN OFFICE</h3>
                    <p className="address">
                        1000 Assembly St, Rembert Dennis Building, Suite 421<br />
                        Columbia, SC 29201
                    </p>
                </div>
                <div className="addresses">
                    <h3 className="address-title">GEODETIC SURVEY SECTION</h3>
                    <p className="address">
                        5 Geology Rd<br />
                        Columbia, SC 29212
                    </p>
                </div>
                <div className="addresses">
                    <h3 className="address-title">HEALTH AND DEMOGRAPHICS DIVISION</h3>
                    <p className="address">
                        1000 Assembly St, Rembert Dennis Building, Suite 240<br />
                        Columbia, SC 29201
                    </p>
                </div>
            </div>
        </div>
    )
}
