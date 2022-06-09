import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Component} from "react";
import Box from "@material-ui/core/Box";
import {IconButton, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


export default class ResponsiveAppBar extends Component {


    constructor(props) {
        super(props);

        this.state = {
            opacity_home: 0.5,
            opacity_resume: 0.5,
            opacity_portfolio: 0.5,
            opacity_contact: 0.5,

            anchorEl: null,
            anchorOriginVertical: 'bottom',
            anchorOriginHorizontal: 'right',
            transformOriginVertical: 'top',
            transformOriginHorizontal: 'right',
            anchorReference: 'anchorEl',

        };
        this.mark_locale = this.mark_locale.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        this.mark_locale()
    }

    mark_locale() {
        let url = window.location.pathname
        if (url === '/') {
            this.setState({opacity_home: 1})
        }
        if (url === '/resume') {
            this.setState({opacity_resume: 1})
        }
        if (url === '/portfolio') {
            this.setState({opacity_portfolio: 1})
        }
        if (url === '/contact') {
            this.setState({opacity_contact: 1})
        }
    }

    mouse_hover_color_home() {
        if (this.state.opacity_home !== 1) {
            this.setState({opacity_home: 0.8})
        }
    }

    mouse_leave_color_home() {
        if (this.state.opacity_home !== 1) {
            this.setState({opacity_home: 0.5})
        }
    }

    mouse_hover_color_resume() {
        if (this.state.opacity_resume !== 1) {
            this.setState({opacity_resume: 0.8})
        }
    }

    mouse_leave_color_resume() {
        if (this.state.opacity_resume !== 1) {
            this.setState({opacity_resume: 0.5})
        }
    }

    mouse_hover_color_portfolio() {
        if (this.state.opacity_portfolio !== 1) {
            this.setState({opacity_portfolio: 0.8})
        }
    }

    mouse_leave_color_portfolio() {
        if (this.state.opacity_portfolio !== 1) {
            this.setState({opacity_portfolio: 0.5})
        }
    }


    mouse_hover_color_contact() {
        if (this.state.opacity_contact !== 1) {
            this.setState({opacity_contact: 0.8})
        }
    }

    mouse_leave_color_contact() {
        if (this.state.opacity_contact !== 1) {
            this.setState({opacity_contact: 0.5})
        }
    }


    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };


    render() {
        const {anchorEl} = this.state;
        const open = Boolean(anchorEl);


        return (
            <AppBar position="static" style={{background: '#2b4f64'}}>
                <Container maxWidth="xl" style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Toolbar disableGutters>


                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : null}
                                onClick={this.handleMenu}
                            >
                                <MenuIcon/>
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
                                transformOrigin={{vertical: "top", horizontal: "center"}}
                                open={open}
                                onClose={this.handleClose}
                            >

                                <MenuItem
                                    href="/"
                                    component="a"
                                    onClick={this.handleClose}
                                > HOME </MenuItem>

                                <MenuItem
                                    href="/resume"
                                    component="a"
                                    onClick={this.handleClose}
                                > RESUME </MenuItem>


                                <MenuItem
                                    href="/portfolio"
                                    component="a"
                                    onClick={this.handleClose}
                                > PORTOLIO </MenuItem>


                                <MenuItem
                                    href="/contact"
                                    component="a"
                                    onClick={this.handleClose}
                                > CONTACT </MenuItem>

                            </Menu>

                        </Box>


                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            onMouseEnter={() => this.mouse_hover_color_home()}
                            onMouseLeave={() => this.mouse_leave_color_home()}
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#FBEEC1',
                                textDecoration: 'none',
                                opacity: this.state.opacity_home
                            }}
                        >
                            HOME
                        </Typography>


                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/resume"
                            onMouseEnter={() => this.mouse_hover_color_resume()}
                            onMouseLeave={() => this.mouse_leave_color_resume()}
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#FBEEC1',
                                textDecoration: 'none',
                                opacity: this.state.opacity_resume
                            }}
                        >
                            RESUME
                        </Typography>


                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/portfolio"
                            onMouseEnter={() => this.mouse_hover_color_portfolio()}
                            onMouseLeave={() => this.mouse_leave_color_portfolio()}
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#FBEEC1',
                                textDecoration: 'none',
                                opacity: this.state.opacity_portfolio
                            }}
                        >
                            PORTFOLIO
                        </Typography>


                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/contact"
                            onMouseEnter={() => this.mouse_hover_color_contact()}
                            onMouseLeave={() => this.mouse_leave_color_contact()}
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: '#FBEEC1',
                                textDecoration: 'none',
                                opacity: this.state.opacity_contact
                            }}
                        >
                            CONTACT
                        </Typography>

                    </Toolbar>
                </Container>
            </AppBar>
        );
    }
}
