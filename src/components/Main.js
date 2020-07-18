import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';

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
            Large space
            <Button variant="contained" color="primary">
              Test Jake
            </Button>
          </Paper>
        </Grid>
        {/* Grid With Text Cards or Paper */}
        <Grid item xs={12}>
          <Paper className={classes.mpaper}>
            Large Space Text
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
          <Paper className={classes.paper}>
            Mini Cards
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            Mini Cards
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            Mini Cards
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            Mini Cards
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
