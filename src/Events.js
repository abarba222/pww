import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

export default function Events() {
    return (
        <div className="eventsStyles">
            <h1 className="events-title" aria-label="Calendar of Events">Calendar of Events</h1>
            <div className="events">
                <span className="event-date-month">NOV<br /><span className="event-day">22</span></span>
                <div className="meeting-details">
                    <p className="event-status updated">Updated</p>
                    <label className="event-meeting" aria-label="Board of Education Advisors Meeting">Board of Education Advisors Meeting</label>
                    <span className="event-time"><FontAwesomeIcon icon={faClock} className="event-time-icon"></FontAwesomeIcon> 1:30PM</span>
                    <span className="event-location"><FontAwesomeIcon icon={faMapMarkerAlt} className="event-location-icon"></FontAwesomeIcon> Room 417, Bowers Conference Room, Rembert Dennis Building</span>
                    <span className="event-phone"><FontAwesomeIcon icon={faPhoneAlt} className="event-phone-icon"></FontAwesomeIcon>(803) 734-2265</span>
                </div>
            </div>
            <div className="events">
                <span className="event-date-month">NOV<br /><span className="event-day">23</span></span>
                <div className="meeting-details">
                    <p className="event-status cancelled">Cancelled</p>
                    <label className="event-meeting" aria-label="Board of Education Advisors Meeting">Board of Education Advisors Meeting</label>
                    <span className="event-time"><FontAwesomeIcon icon={faClock} className="event-time-icon"></FontAwesomeIcon> 1:30PM</span>
                    <span className="event-location"><FontAwesomeIcon icon={faMapMarkerAlt} className="event-location-icon"></FontAwesomeIcon> Room 417, Bowers Conference Room, Rembert Dennis Building</span>
                    <span className="event-phone"><FontAwesomeIcon icon={faPhoneAlt} className="event-phone-icon"></FontAwesomeIcon>(803) 734-2265</span>
                </div>
            </div>
            <div className="events">
                <span className="event-date-month">NOV<br /><span className="event-day">25</span></span>
                <div className="meeting-details">
                    <label className="event-meeting" aria-label="Board of Education Advisors Meeting">Board of Education Advisors Meeting</label>
                    <span className="event-time"><FontAwesomeIcon icon={faClock} className="event-time-icon"></FontAwesomeIcon> 1:30PM</span>
                    <span className="event-location"><FontAwesomeIcon icon={faMapMarkerAlt} className="event-location-icon"></FontAwesomeIcon> Room 417, Bowers Conference Room, Rembert Dennis Building</span>
                    <span className="event-phone"><FontAwesomeIcon icon={faPhoneAlt} className="event-phone-icon"></FontAwesomeIcon>(803) 734-2265</span>
                </div>
            </div>
            <div className="events last">
                <span className="event-date-month">NOV<br /><span className="event-day">28</span></span>
                <div className="meeting-details">
                    <label className="event-meeting" aria-label="Board of Education Advisors Meeting">Board of Education Advisors Meeting</label>
                    <span className="event-time"><FontAwesomeIcon icon={faClock} className="event-time-icon"></FontAwesomeIcon> 1:30PM</span>
                    <span className="event-location"><FontAwesomeIcon icon={faMapMarkerAlt} className="event-location-icon"></FontAwesomeIcon> Room 417, Bowers Conference Room, Rembert Dennis Building</span>
                    <span className="event-phone"><FontAwesomeIcon icon={faPhoneAlt} className="event-phone-icon"></FontAwesomeIcon>(803) 734-2265</span>
                </div>
            </div>
            <a href="/" className="view-all-events" aria-label="View All Events">VIEW ALL EVENTS</a>
        </div>
    )
}
