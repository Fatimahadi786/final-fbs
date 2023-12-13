import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Typography, TextField, Button, Checkbox, FormControlLabel, Grid } from '@mui/material';

function UserEdit() {
    const params = useParams();
    const [isLoading, setLoading] = useState(true); // Changed initial loading state to true
    const navigate = useNavigate();

    const apiUrl = 'http://localhost:8000/api/users';

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        try {
            const response = await axios.get(`${apiUrl}${params.id}`,{withCredentials:true});
            const user = response.data;

            myFormik.setValues({
                name: user.name || '',
                username: user.username || '',
                email: user.email || '',
                isAdmin: user.isAdmin || false, // Assuming isAdmin is a boolean value
            });
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const myFormik = useFormik({
        initialValues: {
            name:"",
            username: "",
            email: "",
            isAdmin:false
        },
        // // Validating Forms while entering the data
        // validate: (values) => {
        //     let errors = {}           //Validating the form once the error returns empty else onsubmit won't work

        //     if (!values.username) {
        //         errors.username = "Please enter username";
        //     } else if (values.username.length < 5) {
        //         errors.username = "Name shouldn't be less than 3 letters";
        //     } else if (values.username.length > 25) {
        //         errors.username = "Name shouldn't be more than 20 letters";
        //     }

        //     if (!values.email) {
        //         errors.email = "Please enter email";
        //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //         errors.email = 'Invalid email address';
        //     }

        //     if (!values.city) {
        //         errors.city = "Please select any one city";
        //     }

        //     if (!values.state) {
        //         errors.state = "Please select any one state";
        //     }

        //     if (!values.country) {
        //         errors.country = "Please select any one state";
        //     }

        //     return errors;
        // },

        onSubmit: async (values) => {
            try {
                setLoading(true);
                await axios.put(`${apiUrl}${params.id}`, values, {withCredentials:true});
                setLoading(false);
                navigate("/portal/user-list")
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
    });

    return (
        <>
            <Typography variant="h3">User Edit - ID: {params.id}</Typography>
            <div className='container'>
                <form onSubmit={myFormik.handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Name"
                                name="name"
                                value={myFormik.values.name}
                                onChange={myFormik.handleChange}
                                
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Username"
                                name="username"
                                value={myFormik.values.username}
                                onChange={myFormik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={myFormik.values.email}
                                onChange={myFormik.handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                            label="Do you want to mark this User as Admin "
                                control={
                                    <Checkbox
                                        checked={myFormik.values.isAdmin}
                                        onChange={myFormik.handleChange}
                                        name="isAdmin"
                                        color='primary'
                                    />
                                }
                                
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                disabled={isLoading}
                                type="submit"
                                variant="contained"
                                color="primary"
                            >
                                {isLoading ? "Updating..." : "Update"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    )
}

export default UserEdit;