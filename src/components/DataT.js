import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import SimpleCard from './SimpleCard';


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
    height: 40,
  }
}));

function DataT(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline>
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* Main */}
        <Grid item xs={12}>
          <Paper className={classes.lpaper}
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1584291527905-f930791fb1ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
          </Paper>
        </Grid>








        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
            <SimpleCard
            deaths={"132395"}
            positive={3692061}
            negative={41273443}
            pending={3032}
            days={"2020/07/18"}/>
        </Grid>
        <Grid item xs={3}>
            <SimpleCard
            deaths={"131523"}
            positive={3626881}
            negative={40576852}
            pending={3002}
            days={"2020/07/17"}/>
        </Grid>
        <Grid item xs={3}>
            <SimpleCard
            deaths={"130572"}
            positive={3549648}
            negative={39802297}
            pending={2929}
            days={"2020/07/16"}/>
        </Grid>
        <Grid item xs={3}>
            <SimpleCard
            deaths={"129595"}
            positive={3478419}
            negative={39042608}
            pending={2947}
            days={"2020/07/15"}/>
        </Grid>
        <Grid item xs={3}>
            <SimpleCard
            deaths={"128740"}
            positive={3413313}
            negative={38351244}
            pending={960}
            days={"2020/07/14"}/>
        </Grid>
        <Grid item xs={3}>
            <SimpleCard
            deaths={"128004"}
            positive={"3350434"}
            negative={"37653841"}
            pending={"2610"}
            days={"2020/07/13"}/>
        </Grid>
        <Grid item xs={3}>
            <SimpleCard
            deaths={"127677"}
            positive={3291969}
            negative={36990207}
            pending={2639}
            days={"2020/07/12"}/>
        </Grid>
        <Grid item xs={3}>
            <SimpleCard
            deaths={"127201"}
            positive={3230991}
            negative={36323867}
            pending={2618}
            days={"2020/07/11"}/>
        </Grid>
        {/* Footer */}
        <Grid item xs={12}>
          <Paper className={classes.footer}>
            Hack2020
          </Paper>
        </Grid>
      </Grid>
    </div>
    </CssBaseline>
    </React.Fragment>
  );
}

export default DataT;
