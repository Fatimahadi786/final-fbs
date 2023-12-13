import { faBook, faFaceLaughWink, faHotel, faPlane, faPlaneUp, faTachographDigital, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import LOGO from "./component/logo.png"
function Sidebar() {
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <img 
            src={LOGO}
            />
           
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/dashboard">
                    <FontAwesomeIcon icon={faTachographDigital} style={{ marginRight: "0.5rem" }} />
                    <span>Dashboard</span>
                </Link>
            </li>
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Users</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/addFlight">
                    <FontAwesomeIcon icon={faPlaneUp} style={{ marginRight: "0.5rem" }} />
                    <span>New Flight</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/flight-list">
                    <FontAwesomeIcon icon={faPlane} style={{ marginRight: "0.5rem" }} />
                    <span>Flight Details</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/booking-list">
                    <FontAwesomeIcon icon={faBook} style={{ marginRight: "0.5rem" }} />
                    <span>Booking</span>
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/cancelflight">
                    <FontAwesomeIcon icon={faBook} style={{ marginRight: "0.5rem" }} />
                    <span>schedule Notification</span>
                </Link>
            </li>

        </ul>
    )
}

export default Sidebar