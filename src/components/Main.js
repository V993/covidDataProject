import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Card from './Card';
import { Typography } from '@material-ui/core';

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
    color: theme.palette.text.primary,
    height: 200,
  },
  footer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 50,
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
          style={{ backgroundImage: 'url(https://www.wlrn.org/sites/wlrn/files/styles/x_large/public/202005/contact_tracing__1_.png)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
          </Paper>
        </Grid>
        {/* Grid With Text Cards or Paper */}
        <Grid item xs={12}>
          <Paper className={classes.mpaper}>
            <Typography variant="h4" gutterBottom style={{textAlign: 'center'}}>
                What is contact tracing?
            </Typography>
            <Typography variant="body1" gutterBottom style={{textAlign: 'center'}}>
            Contact tracing is a study carried out to study patterns and locations of events in order to
            track down the source. With the current Covid-19 situation, it appears as though there will be a mass
            increase in positive cases and deaths. Social distancing has worked quite well for sometime, however,
            do we always know where it is safe and where it isn't?
            The sad reality is that we don't, not unless we carry out this project.
            Below can be see statistics of the current situation
            </Typography>


          </Paper>
        </Grid>

        {/* Grid With Info */}
        <Grid item xs={12}>
          <Paper className={classes.mpaper}>
              <Typography variant="h4" gutterBottom style={{textAlign: 'center'}}>
                  Want to have an impact?
              </Typography>
              <Typography variant="body1" gutterBottom style={{textAlign: 'center'}}>
              Please help us decrease the spread of the virus and keeping yourself and others safe by donating to
              the charities bellow.
              Additionally, we do have an optional survey that can help with research targetting Covid-19 hotzones
              and how to stay safe in this hard times.
              </Typography>
          </Paper>
        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>

            <Card charityName = "Alight" charityImg = "https://parade.com/wp-content/uploads/2020/04/how-to-help-coronavirus-relief-charities-ftr.jpg" url = "https://wearealight.org/" description = "Alight is supporting local operations in nine countries where they have had an ongoing, long-term presence. Efforts include increasing access to WASH (water, sanitation and hygiene) facilities in refugee settlements and supplying protective equipment for medical staff."/>

        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>

            <Card charityName = "CDC Foundation" charityImg = "https://www.cdcfoundation.org/themes/foundation_cdcf/images/logo2-2.png" url = "https://www.cdcfoundation.org/" description = "The CDC Foundation works in close collaboration with the United States Centers for Disease Control and Prevention to rapidly deploy private and philanthropic funds where they are needed most during emergency outbreaks."/>

        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>

          <Card charityName = "The CDP" charityImg = "https://www.environmentalleader.com/wp-content/uploads/2015/11/CDP-logo.jpg" url = "https://disasterphilanthropy.org/" description = "The Center for Disaster Philanthropy (CDP) is a full-time resource to help donors make more thoughtful disaster-related decisions and focus on nonprofit organizations working in areas with high numbers of vulnerable populations to maximize the positive impact."/>

        </Grid>
        {/* Grid With Cards or Paper */}
        <Grid item xs={3}>

          <Card charityName = "The CEPI" charityImg = "https://www.nestle.com/sites/default/files/styles/banner_caption_image_style/public/covid-19-carousel-CEPI.jpg?h=b66b5b40&itok=lNqbaRd6" url = "https://cepi.net/" description = "Coalition for Epidemic Preparedness Innovations (CEPI) works to stimulate and accelerate the development of vaccines against emerging infectious diseases and enable access to these vaccines for people. Its latest funding call aims to develop a proven vaccine against COVID-19."/>

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

export default Main;
