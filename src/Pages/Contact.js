import React from 'react'
import Layout from '../Components/Layout'
import { Box, Button, Container, FormGroup, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import emailjs from 'emailjs-com';

const genderList = [
    'Male',
    'Female',
];

const initialFormData = {
    name: '',
    gender: 'Male',
    email: '',
    phone: '',
    message: ''
}

function Contact() {
    const [feedback, setFeedback] = React.useState('');
    const [formData, setFormData] = React.useState(initialFormData);
    
    const clearForm = () => {
        setFormData(initialFormData);
    }

    const validation = () => {
        let isValid = true;

        if (formData.email.indexOf('@') === -1) {
            setFeedback('Please fill a valid email');
            isValid = false;
        }
        if (formData.email === '') {
            setFeedback('Please fill the email field');
            isValid = false;
        }
        if (formData.name === '') {
            setFeedback('Please fill the name field');
            isValid = false;
        }
        
        return isValid;
    }

    const handleSave = (e) => {
        e.preventDefault();
        console.log(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
        const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
        console.log(publicKey)
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        console.log(serviceId, templateId)
        if (validation()) {
            try {
                 // Send Email
                emailjs.send(
                    serviceId, 
                    templateId, 
                    formData, 
                    publicKey
                )
                setFeedback('Email sent successfully')
                setTimeout(() => {
                    setFeedback('')
                    clearForm();
                }, 3000);
            } catch (error) {
                console.log(error);

            }
        }
    }
    
    return (
        <Layout>
            <Container>
                <Box sx={{ width: "60%", margin: "40px auto" }}>
                    <Typography variant="h2" component="h2" sx={{ marginBottom: '30px', textAlign: 'center', fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" } }}>
                        Contact Me
                    </Typography>
                    <form>
                        <Grid container spacing={2}>
                            <Grid item xs={8} md={8}>
                                <FormGroup sx={{ marginBottom: "20px" }}>
                                    <InputLabel required htmlFor="name">Name</InputLabel>
                                    <TextField 
                                        id="name" 
                                        type='text'
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value})}
                                    />
                                </FormGroup>
                            </Grid>
                            <Grid item xs={4} md={4}>
                                <FormGroup sx={{ marginBottom: "20px" }}>
                                    <InputLabel htmlFor="gender">Gender</InputLabel>
                                    <Select
                                        id="gender"
                                        value={formData.gender}
                                        onChange={(e) => setFormData({ ...formData, gender: e.target.value }) }
                                    >
                                        {
                                            genderList.map(gender => (
                                                <MenuItem key={gender} value={gender}>
                                                    {gender}
                                                </MenuItem>
                                            ))
                                        }
                                    </Select>
                                </FormGroup>
                            </Grid>
                        </Grid>
                        <FormGroup sx={{ marginBottom: "20px" }}>
                            <InputLabel required htmlFor="email">Email</InputLabel>
                            <TextField 
                                fullWidth 
                                id="email" 
                                type='email' 
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value})}
                            />
                        </FormGroup>
                        <FormGroup sx={{ marginBottom: "20px" }}>
                            <InputLabel htmlFor="phone">Phone</InputLabel>
                            <TextField 
                                fullWidth 
                                id="phone" 
                                type='tel'  
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value})}
                            />
                        </FormGroup>
                        <FormGroup sx={{ marginBottom: "20px" }}>
                            <InputLabel htmlFor="message">Message</InputLabel>
                            <TextField 
                                fullWidth
                                multiline 
                                id="message" 
                                type='text'  
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value})}
                            />
                        </FormGroup>
                        <Box display="flex" justifyContent="flex-end" sx={{ margin: "40px 0" }}>
                            <Typography 
                                variant="h5"
                                component="h5" 
                                sx={{ 
                                    marginRight: "20px", 
                                    color: feedback === 'Email sent successfully' ? "#080" : "#C00" 
                                }}>
                                {feedback}
                            </Typography>
                            <Button variant="contained" color="primary" type="submit" sx={{ minWidth: "200px" }} onClick={handleSave}>
                                Send
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </Layout>
    )
}

export default Contact