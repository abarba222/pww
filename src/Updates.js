import React from 'react'

export default function Updates() {
    return (
        <div className="updatesStyles">
            <h1 className="updates-title" aria-label="Recent Updates">Recent Updates</h1>
            <div className="updates">
                <a href="/" className="update-link" aria-label="Local Government Finance">Local Government Finance</a>
                <p className="update-text">Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales</p>
                <div className="updates-published-section">
                    <label className="updates-published"><strong>Published: </strong>Jan 2, 2020</label>
                    <span className="publication-status">Updated</span>
                </div>
            </div>
            <div className="updates">
                <a href="/" className="update-link" aria-label="Transportation Network Carrier Maps">Transportation Network Carrier Maps</a>
                <div className="updates-published-section">
                    <label className="updates-published"><strong>Published: </strong>Jan 2, 2020</label>
                    <span className="publication-status">New</span>
                </div>
            </div>
            <div className="updates">
                <a href="/" className="update-link" aria-label="BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23">BEA Long-Range General Fund Revenue Plan for FY 2019-20 to FY 2022-23</a>
                <p className="update-text">Vestibulum rutrum quam vitae fringilla tincidunt. Suspendisse nec tortor urna. Ut laoreet sodales</p>
                <div className="updates-published-section">
                    <label className="updates-published"><strong>Published: </strong>Dec 16, 2019</label>
                    <span className="publication-status">Updated</span>
                </div>
            </div>
            <div className="updates">
                <a href="/" className="update-link" aria-label="Budget Development">Budget Development</a>
                <div className="updates-published-section">
                    <label className="updates-published"><strong>Published: </strong>Dec 16, 2020</label>
                    <span className="publication-status">New</span>
                </div>
            </div>
            <div className="updates">
                <a href="/" className="update-link" aria-label="November 2019 General Fund Revenue Digest">November 2019 General Fund Revenue Digest</a>
                <div className="updates-published-section">
                    <label className="updates-published"><strong>Published: </strong>Dec 13, 2020</label>
                    <span className="publication-status">New</span>
                </div>
            </div>
            <a href="/" className="view-more" aria-label="View More">VIEW MORE</a> 
        </div>
    )
}
