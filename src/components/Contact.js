import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import {GitHub, LinkedIn} from "@material-ui/icons";
import Button from "@material-ui/core/Button";
import Instagram from "@material-ui/icons/Instagram";
import ContactMeText from "./ContactMeText";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
    contactContainer: {
        background: "#182d39",
        height: "100vh",

    },

    heading: {
        color: "#BC986A",
        textAlign: "center",
        textTransform: "uppercase",
        marginBottom: "1rem",
        paddingBottom: "10%",
        fontWeight: "bold",
    },
    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
        paddingBottom: "10%",
    },
    button: {
        marginTop: "1rem",
        color: "tomato",
        borderColor: "tan",
    },
    root: {
        marginTop: "1.5rem",
        color: "#BC986A",
        background: "#222",

        "&:hover": {
            fill: "tomato",
            fontSize: "1.5rem",
            background: "#3e7493",
            color: "#EDF5E1",
            borderRadius: "15px",
            "& .MuiSvgIcon-root": {
                fill: "tan",
                fontSize: "2rem",
            },
        },

    },


}));


const Contact = () => {

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    const classes = useStyles();
    return (
        <div>
            <Navbar/>
            <Box component="div" className={classes.contactContainer}>
                <Grid container justifyContent="center">
                    <Box component="form" className={classes.form}>

                        <ContactMeText/>

                        <Grid container className={classes.heading}></Grid>

                        <Button
                            variant="outlined"
                            fullWidth={true}
                            endIcon={<LinkedIn/>}
                            className={classes.root}
                            target="_blank"
                            href="https://www.linkedin.com/in/arildo-magno-3a34a785/"
                        >
                            Linkedin
                        </Button>


                        <Button
                            variant="outlined"
                            fullWidth={true}
                            endIcon={<GitHub/>}
                            className={classes.root}
                            target="_blank"
                            href="https://github.com/ArildoMagno"
                        >
                            GitHub
                        </Button>


                        <Button
                            variant="outlined"
                            fullWidth={true}
                            endIcon={<Instagram/>}
                            className={classes.root}
                            target="_blank"
                            href="https://www.instagram.com/arildomagno/"
                        >
                            Instagram
                        </Button>


                    </Box>

                </Grid>

            </Box>
        </div>

    );
};

export default Contact;
