import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import axios from 'axios';

function UserView() {
    const params = useParams();
    const [userDetails, setUserDetails] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        // On Load
        getUsers();
    }, []);

    let getUsers = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/users/${params.id}`, { withCredentials: true });
            setUserDetails(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
            <Card style={{ width: '50%', padding: '20px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <CardContent>

                    {isLoading ? (
                        <div style={{ textAlign: 'center' }}>
                            <CircularProgress />
                        </div>
                    ) : (
                        <div>
                            <Typography variant="h4" component="div" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
                                {userDetails.name}
                            </Typography>
                            {Object.keys(userDetails)
                                .filter(key => key !== '_id' && key !== 'password' && key !== '__v' && key !== 'name')
                                .map(key => (
                                    <Typography key={key} style={{ fontSize: '1.2em', fontWeight: 'bold', marginBottom: '10px' }}>
                                        {key}: {typeof userDetails[key] === 'boolean' ? (userDetails[key] ? 'true' : 'false') : userDetails[key]}
                                    </Typography>
                                ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}

export default UserView;
