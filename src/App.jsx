import React, { Component } from 'react';
import Header from './components/header_footer/Header.jsx';
import Footer from './components/header_footer/Footer.jsx';
import Conten from './components/rifa/Conten.jsx';
import Grid from '@material-ui/core/Grid';

class App extends Component {
  render() {
    return (
      <Grid container spacing="6">
        <Grid item xs={12} >
          <Header/>
        </Grid>
        <Grid item xs={12}>
          <Conten />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    );
  }
}


export default App;