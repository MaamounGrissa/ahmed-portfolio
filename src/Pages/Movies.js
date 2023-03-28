import React from 'react';
import axios from 'axios';
import { Box, Card, CardContent, CardMedia, Container, FormControl, Grid, OutlinedInput, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Layout from '../Components/Layout';

function Movies() {
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
    <Layout>
        <Container maxWidth="lg">
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
          movies?.map((movie) => {
              return (
                  <Grid item xs="12" md="4" lg="3" key={movie.id} sx={{ margin: "20px 0" }}>
                      <Card>
                          <CardMedia
                              component="img"
                              height="160"
                              image={movie.i?.imageUrl}
                              alt={movie.l}
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="h5" height={45}>
                                  {movie.l}
                              </Typography>
                              <Typography variant="body2" color="text.secondary" height={60}>
                                  {movie.s}
                              </Typography>
                          </CardContent>
                      </Card>
                  </Grid>
              )
          })
      }
          </Grid>
      </Container>
    </Layout>
  )
}

export default Movies