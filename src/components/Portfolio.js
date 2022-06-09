import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/typescript.jpg";
import project2 from "../images/typescript2.jpg";
import project3 from "../images/javascript.jpg";
import project4 from "../images/react.jpg";
import project5 from "../images/github.jpg";


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#182d39",
        height: "100%",
    },
    cardContainer: {
        maxWidth: 345,
        margin: "3rem auto",
        borderRadius: "1vh",
    },
}));

const projects = [
    {
        name: "DropBox Clone",
        description: `
    Using Typescript i implemented a copy of DropBox, 
    imitating its design.
    To view the result of this work click on live demo here below`,
        image: project1,
        link: "https://arildomagno.github.io/DropboxClone"
    },

    {
        name: "Pipefy Clone",
        description: `
    Using JavaScript i implemented a copy of Twitter, 
    imitating its design.
    To view the result of this work click on live demo here below`,
        image: project3,
        link: "https://arildomagno.github.io/PipefyClone"
    },

    {
        name: "Twitter Clone",
        description: `
    Using Typescript i implemented a copy of Twitter, 
    imitating its design.
    To view the result of this work click on live demo here below`,
        image: project2,
        link: "https://arildomagno.github.io/TwitterClone"
    },
    {
        name: "Discord Clone",
        description: `
    Using React i implemented a copy of Twitter, 
    imitating its design.
    To view the result of this work click on live demo here below`,
        image: project4,
        link: "https://arildomagno.github.io/DiscordClone"
    },
    {
        name: "My Others Projects",
        description: `My other projects involving artificial intelligence, 
    django, spring and others can be found on my github. 
    Click Show here below to view.`,
        image: project5,
        link: "https://github.com/ArildoMagno"
    }
];

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Grid container justifyContent="center">
                {/* Projects */}
                {projects.map((project, i) => (
                    <Grid item xs={12} sm={8} md={4} key={i}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    alt="Project 1"
                                    height="140"
                                    image={project.image}
                                />
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>
                                        {project.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary"
                                        target="_blank"
                                        href={project.link}>
                                    Live Demo
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Portfolio;
