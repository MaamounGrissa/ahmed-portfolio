import { Facebook, Instagram, LinkedIn } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <Box sx={{ background: "#AAA", width: "100%", padding: "40px 0" }}>
        <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Box>
                <Typography variant='h6' component='h3'>Ahmed Sharkawi</Typography>
            </Box>
            <Box>
                <Typography variant='h6' component='h3'>
                    All Rights Reserved &copy; {new Date().getFullYear()}
                </Typography>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Link to='https://facebook.com' rel='noreferrer' target='_blank'>
                    <Facebook />
                </Link>
                <Link to='https://instagram.com' rel='noreferrer' target='_blank'>
                    <Instagram />
                </Link>
                <Link to='https://linkedin.com' rel='noreferrer' target='_blank'>
                    <LinkedIn />
                </Link>
            </Box>
        </Box>
    </Container>
    </Box>
    
  )
}

export default Footer