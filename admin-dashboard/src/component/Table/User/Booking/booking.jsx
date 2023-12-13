import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

function BookingList() {
  const [bookingList, setBookingList] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigate(); 
  const apiUrl = 'http://localhost:8800/api/booking/bookings'; // Adjust the URL based on your API

  useEffect(() => {
    getBookings();
  }, []);
  const handleDelete = async (id) => {
    try {
      const confirmDelete = window.confirm("Are you sure you want to delete the data?");
      if (confirmDelete) {
        await axios.delete(`${apiUrl}/${id}`, { withCredentials: true });
        getBookings(); // Corrected function name
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  const getBookings = async () => {
    try {
      const response = await axios.get(apiUrl, { withCredentials: true });
      const bookings = response.data;

      if (Array.isArray(bookings)) {
        setBookingList(bookings);
      } else {
        setBookingList([]);
      }

      setLoading(false);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
  };

 

  const handlePDF = async (id) => {
  
    navigation(`/pdf/${id}`);
  
  }
  

  const getRowId = (row) => row._id;

  const columns = [
    { field: '_id', headerName: 'PNR Number', flex: 1 },
    { field: 'flightType', headerName: 'Flight Type', flex: 1 },
    { field: 'flightClass', headerName: 'Flight Class', flex: 1 },
    { field: 'journeyTime', headerName: 'Journey Time', flex: 1 },
    { field: 'arrivalTime', headerName: 'Arrival Time', flex: 1 },
    {
      field: 'totalPassengers',
      headerName: 'Total Passenger',
      flex: 1,
      renderCell: (params) => {
        const totalPassengers = (params.row.adults || 0) + (params.row.children || 0);
        return <div>{totalPassengers}</div>;
      },
    },
    
    

    {
      field: 'passengers',
      headerName: 'Passengers',
      flex: 1,
      renderCell: (params) => {
        if (params.row.passengers && params.row.passengers.length > 0) {
          const passengerDetails = params.row.passengers.map((passenger, index) => (
            <div key={index}>
              <strong>{passenger.fullName}</strong>
            </div>
          ));

          return <div>{passengerDetails}</div>;
        }

        return '';
      },
    },
    { field: 'status', headerName: 'Status', flex: 1,   renderCell: (params) => (<strong>Comfirm</strong>)},
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params) => (
        <div className="d-flex justify-content-center">
          <button onClick={() => handleDelete(params.row._id)} className='btn btn-danger btn-sm'>
            Delete
          </button>
          <button onClick={() => handlePDF(params.row._id)} className='btn btn-success btn-sm ml-2'>
            PDF
          </button>

        </div>
      ),
    },
  ];

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Booking List</h1>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={bookingList}
          columns={columns}
          pageSize={5}
          loading={isLoading}
          getRowId={getRowId}
        />
      </div>
    </div>
  );
}

export default BookingList;
