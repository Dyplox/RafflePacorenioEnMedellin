import React, { Component } from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Typography variant="h5" component="h5" gutterBottom align="inherit" align="center">
                    Labor Social de Solidaridad para la Niñez de Nuestro Pueblo
                    </Typography>
                <Copyright />
            </footer>

        )
    }
}

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://www.facebook.com/pacorenos.medellin">
                - Pacoreños en Medellín -
        </Link>{' '}
            {"1810 a "}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default Footer