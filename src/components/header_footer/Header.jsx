import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';



class Header extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar variant="dense">
                    <IconButton edge="start" color="inherit" aria-label="menu">

                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Pacoreños en Medellín
                    </Typography>
                </Toolbar>
            </AppBar>

        )
    }
}

export default Header