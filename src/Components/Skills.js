import { Avatar, Box, Container, Grid, LinearProgress, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { skills } from '../Data/data'
import { useTranslation } from 'react-i18next';

function Skills() {
    const { t } = useTranslation();
    const [skillState, setSkillState] = React.useState([]);

    useEffect(() => {
        setSkillState(skills.map(skill => ({
            id: skill.id,
            percentage: 0,
            percentageMax: skill.percentage,
        })))
    }, [])
    
    useEffect(() => {

        setInterval(() => {
            skillState.forEach(skill => {
                if (skill.percentage < skill.percentageMax) {
                    skill.percentage += 10;
                }
            })
            setSkillState(skillState);
        }, 200);

    }, [skillState])

    return (
        <Container>
            <Typography variant="h2" component="h2" sx={{ fontWeight: 700, fontSize: { xs: "2rem", md: "3rem" }, marginBottom: "40px", textAlign: "center" }}>
                {t('skills_title')}
            </Typography>
            <Grid container spacing={6} sx={{ marginBottom: "40px" }}>
                {
                    skills.map(skill => (
                        <Grid item xs={12} md={4} lg={4} key={skill.id} >
                            <Avatar data-aos="zoom-in" data-aos-duration="1200" 
                                sx={{ 
                                bgcolor: skill.color, 
                                width: "200px", 
                                height: "200px",
                                margin: "0 auto 20px",
                            }}>
                                {skill.icon}
                            </Avatar>
                            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: "20px" }}>
                                <LinearProgress variant="determinate" value={skillState.find(ski => ski.id === skill.id)?.percentage} sx={{ width: "70%", height: "15px"}} />
                                <Typography variant="h3" component="h3" sx={{ fontWeight: 400, fontSize: { xs: "1.5rem", md: "2rem" }, marginLeft: "10px", width: "20%" }}>
                                    {skill.percentage}%
                                </Typography>
                            </Box>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    )
}

export default Skills