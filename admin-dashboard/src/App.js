import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import "./sb-admin-2.min.css";
import Dashboard from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import Login from "./component/Forms/Auth/Login";
import Userlist from "./component/Table/User/Userlist";
import Portal from "./Portal";
import UserCreate from "./UserCreate";
import UserView from "./component/Table/User/UserView";
import UserEdit from "./component/Forms/User/UserEdit";
import Register from "./component/Forms/Auth/Register";
import FlightList from "./component/Table/User/FLIGHT/flightList";
import BookingList from "./component/Table/User/Booking/booking";

import FlightView from "./component/Table/User/FLIGHT/flightview";
import EditFlightForm from "./component/Table/User/FLIGHT/flightview";
import PDF from "./component/Table/User/Booking/pdf";
import CreateFlightForm from "./component/Table/User/FLIGHT/addFlight";


import FlightNotification from "./component/Table/schedule/cancelflight";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/portal" element={<Portal />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="user-list" element={<Userlist />} />
        <Route path="create-user" element={<UserCreate />} />
        <Route path="user-view/:id" element={<UserView />} />
        <Route path="user-edit/:id" element={<UserEdit />} />
        <Route path="flight-list" element={<FlightList />} />
        <Route path="flight-view/:id" element={<FlightView />} />
        <Route path="flight-edit/:id" element={<EditFlightForm />} />
        <Route path="addFlight" element={<CreateFlightForm />} />
        <Route path="booking-list" element={<BookingList />} />
        <Route path="cancel-flight" element={<FlightNotification/>} />
        </Route>
      <Route path="/pdf/:id" element={<PDF />} />
    </Routes>
  );
}

export default App;
