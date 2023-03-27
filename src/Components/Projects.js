import React from 'react';
import { projects } from '../Data/data';
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

function Projects() {
    const { t } = useTranslation();
  return (
    <Container>
        <Typography variant="h2" component="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" }, marginBottom: "40px", marginTop: "80px", textAlign: "center" }}>
                {t('projects_title')}
        </Typography>
        <Grid container>
            {
                projects.map(project => (
                    <Grid item xs={12} md={4} lg={4} key={project.id} data-aos="fade-up" data-aos-duration="1000" >
                        <Card sx={{ maxWidth: 345, marginBottom: "40px" }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={project.image}
                                alt={project.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {project.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {project.description}
                                </Typography>
                            </CardContent>
                            <CardActions>
                               <Button size="small"> <a href={project.link} target='_blank' rel="noreferrer">Link</a></Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    </Container>
  )
}

export default Projects