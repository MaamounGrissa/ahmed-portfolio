import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { useTranslation } from 'react-i18next';

function Intro() {
    const { t, i18n } = useTranslation();
    console.log(i18n)
  return (
    <Box sx={{ minHeight: "100vh", width: "100vw" }}>
        <Container >
            <Grid container sx={{ flexDirection: i18n.language === 'ar' ? 'row-reverse' : 'initial', alignItems: 'center' }}>
                <Grid item xs={12} md={6} data-aos="fade-right" data-aos-duration="1200" >
                    <Box display="flex" justifyContent="center" flexDirection="column" sx={{ height: "100vh"}}>
                        <Typography variant="h1" component="h1" 
                                    sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" }, direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
                            {t('intro_title')}
                        </Typography>
                        <Typography variant="h2" component="h2" 
                                    sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" }, direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
                            {t('intro_subtitle')}
                        </Typography>
                        <Typography variant="body1" component="p" 
                                    sx={{ marginTop: "20px", fontWeight: 400, fontSize: { xs: ".8rem", md: "1rem" }, direction: i18n.language === 'ar' ? 'rtl' : 'ltr' }}>
                            {t('intro_description')}
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box display="flex" justifyContent="center" alignItems="center" data-aos="fade-left" data-aos-duration="1200" >
                        <img className='my-picture' src="/images/me.jpg" alt="Ahmed" />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  )
}

export default Intro