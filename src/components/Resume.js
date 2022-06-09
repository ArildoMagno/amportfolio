import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Navbar from "./Navbar";

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        background: "#182d39",
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "o auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "100%",
            border: "1px solid tan",
            right: "40px",
            top: 0,
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            },
        },
    },
    timeLineItem: {
        padding: "1rem",
        borderBottom: "2px solid tan",
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
        "&:after": {
            content: "''",
            position: "absolute",
        },
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-0.625rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#659DBD #659DBD transparent transparent",
            borderWidth: "0.625rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "tan",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-0.625rem",
                borderColor: "transparent transparent #659DBD #659DBD",
            },
        },
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "9.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        color: "#EDF5E1",
        background: "#659DBD",
        lineHeight: 1,
        padding: "0.5rem 1rem",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        },
    },
    heading: {
        color: "#BC986A",
        padding: "3rem 0",
        textTransform: "uppercase",
    },
    subHeading: {
        color: "#EDF5E1",
        padding: 0,
        textTransform: "uppercase",
    },
    body1: {
        color: "#d1d2a2",
    },
    subtitle1: {
        color: "#cce1ef",
    },
}));

const Resume = () => {
    const classes = useStyles();
    return (<div>
            <Navbar/>

            <Box component="header" className={classes.mainContainer}>
                <Typography variant="h4" align="center" className={classes.heading}>
                    Working Experience
                </Typography>
                <Box component="div" className={classes.timeLine}>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2017
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            html & css
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            My first web project was developed using only html, css and sql.
                            It was just a landpage with product images.
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2018
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            React FrontEnd
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            Needing more, I started the front end studies with react,
                            where I developed personal web systems.
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2019
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            Fullstack Javascript
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            I started working as an intern for a large technology company,
                            where we provided services to large clients such as the Brazilian army.
                            There I worked with React and Node Js, being full stack in JavaScript.
                        </Typography>
                    </Box>
                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2020
                    </Typography>
                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            Spring & Angular
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            In this same company we changed our technologies to angular and spring boot,
                            where I worked with javascript in the FrontEnd and java in the BackEnd.
                        </Typography>
                    </Box>

                    <Typography
                        variant="h2"
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2021
                    </Typography>

                    <Box component="div" className={classes.timeLineItem}>
                        <Typography
                            variant="h5"
                            align="center"
                            className={classes.subHeading}
                        >
                            Django & React
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            align="center"
                            className={classes.subtitle1}
                        >
                            I started to study Django and I liked it a lot,
                            developed my college graduation project in Django and React.
                        </Typography>
                    </Box>


                </Box>
            </Box>
        </div>
    );
};

export default Resume;
