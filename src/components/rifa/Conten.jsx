import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import UnitRaffle from './Unitraffle.jsx';

class Content extends Component {
    render() {
        return (
            <Grid container spacing="2">
                <Grid item xs={12} sm={6}>
                    <UnitRaffle />
                </Grid>
                <Grid item xs={12} sm={1}>
                    <span style={{width:"100%", height:"100%"}}>flecha</span>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <span>historico</span>
                </Grid>
            </Grid>
        )
    }
}

export default Content