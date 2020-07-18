import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Card from './Card'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 140,
  },
  lpaper: {
    padding: theme.spacing(20),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 500,
  },
  mpaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
  },
  footer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 75,
  }
}));

function Main(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline>
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* Main */}
        <Grid item xs={12}>
          <Paper className={classes.lpaper}
          style={{ backgroundImage: 'url(https://source.unsplash.com/user/erondu/1600x900)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
            <Button variant="contained" color="primary">
              Test Jake
            </Button>
          </Paper>
        </Grid>
        {/* Grid With Text Cards or Paper */}
        <Grid item xs={12}>
          <Paper>
            <h>What is contact tracing?</h>
            <p/>Contact tracing is a study carried out to study patterns and locations of events in order to track down the source. With the current Covid-19 situation, it appears as though there will be a mass increase in positive cases and deaths. Social distancing has worked quite well for sometime, however, do we always know where it is safe and where it isn't?
            <p/> The sad reality is that we don't, not unless we carry out this project.
            Please help us decrease the spread of the virus and keeping yourself and others safe by donating to the charities bellow.
            Additionally, we do have an optional survey that can help with research targetting Covid-19 hotzones and how to stay safe in this hard times.
            <p/><button>Survey</button>
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Optional
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Optional
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
          <Paper className={classes.spaper}>
            <Card/>
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
          <Paper className={classes.spaper}>
            <Card/>
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
          <Paper className={classes.spaper}>
            <Card/>
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
          <Paper className={classes.spaper}>
            <Card/>
          </Paper>
        </Grid>
        {/* Footer */}
        <Grid item xs={12}>
          <Paper className={classes.footer}>
            Footer
          </Paper>
        </Grid>
      </Grid>
    </div>
    </CssBaseline>
    </React.Fragment>
  );
}

export default Main;
