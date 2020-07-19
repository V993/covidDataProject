import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
//import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Card from './Card';

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

function Show(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
    <CssBaseline>
    <div className={classes.root}>
      <Grid container spacing={3}>
        {/* Main */}
        <Grid item xs={12}>
          <Paper className={classes.lpaper}
          style={{ backgroundImage: 'url(https://www.wlrn.org/sites/wlrn/files/styles/x_large/public/202005/contact_tracing__1_.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            Results for {props.stateVal}
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
          <Paper>
            <Card charityName = "Alight" charityImg = "/" url = "https://wearealight.org/" description = "Alight is supporting local operations in nine countries where they have had an ongoing, long-term presence. Efforts include increasing access to WASH (water, sanitation and hygiene) facilities in refugee settlements and supplying protective equipment for medical staff."/>
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
          <Paper>
            <Card charityName = "CDC Foundation" charityImg = "/" url = "https://www.cdcfoundation.org/" description = "The CDC Foundation works in close collaboration with the United States Centers for Disease Control and Prevention to rapidly deploy private and philanthropic funds where they are needed most during emergency outbreaks."/>
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
          <Paper>
          <Card charityName = "The CDP" charityImg = "/" url = "https://disasterphilanthropy.org/" description = "The Center for Disaster Philanthropy (CDP) is a full-time resource to help donors make more thoughtful disaster-related decisions and focus on nonprofit organizations working in areas with high numbers of vulnerable populations to maximize the positive impact."/>
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>
          <Paper>
          <Card charityName = "The CEPI" charityImg = "/" url = "https://cepi.net/" description = "Coalition for Epidemic Preparedness Innovations (CEPI) works to stimulate and accelerate the development of vaccines against emerging infectious diseases and enable access to these vaccines for people. Its latest funding call aims to develop a proven vaccine against COVID-19."/>
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

export default Show;
