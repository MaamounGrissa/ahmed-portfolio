import React from 'react';
import axios from 'axios';
import { Box, Container, FormControl, Grid, OutlinedInput, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function MoviesComponent() {
    const { t, i18n } = useTranslation();
    const [movies, setMovies] = React.useState([]);
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        axios.get('https://online-movie-database.p.rapidapi.com/auto-complete', {
            params: {q: search},
            headers: {
                'X-RapidAPI-Key': 'b8630dc2bamsh169615709508bcbp162695jsn727caf34ef0f',
                'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
            }
        }).then(function (response) {
            setMovies(response.data.d);
        }).catch(function (error) {
            console.error(error);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const handleChangeSearch = (e) => {
        setSearch(e.target.value);
    }

  return (
    <Container> 
        <Box display="flex" alignItems="center" sx={{ 
            marginBottom: "40px", 
            marginTop: "40px", 
            direction: i18n.language === 'ar' ? "rtl" : "ltr"
            }}>
            <Typography variant="h2" component="h2" sx={{ 
                fontWeight: 700, 
                fontSize: { xs: "2rem", md: "3rem" },
                marginLeft: i18n.language === 'ar' ? "20px" : "0px",
                marginRight: i18n.language === 'ar' ? "0px" : "20px",
            
            }}>
                {t('movies_title')} :
            </Typography>
            <FormControl>
                <OutlinedInput
                    id="movies-search"
                    value={search}
                    onChange={handleChangeSearch}
                    sx={{
                        width: "300px",
                    }}
                />
            </FormControl>
        </Box>
        <Grid container spacing={2} sx={{ minHeight: "400px" }}>
    {
        movies?.map((product) => {
            return (
                <Grid item xs="12" md="4" lg="3" key={product.id} sx={{ margin: "20px 0" }}>
                    <img className='product-image' src={product.i?.imageUrl} alt={product.l} />
                    <Typography variant="h3" component="h3" sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", md: "2rem" } }}>
                        {product.l}
                    </Typography>
                    <Typography variant="body1" component="p" sx={{ fontWeight: 400, fontSize: { xs: ".8rem", md: "1rem" } }}>
                        {product.s}
                    </Typography>
                </Grid>
            )
        })
    }
        </Grid>
    </Container>
  )
}

export default MoviesComponent