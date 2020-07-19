import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Nav(props){
    const classes = useStyles();
    return(
      <React.Fragment>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <LocalHospitalIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              {props.name}
            </Typography>
            <Button color="inherit" href="/">
              <HomeIcon fontSize="small" />Home
            </Button>
            <Button color="inherit"href="/Data">
              <SearchIcon fontSize="small" />Data
            </Button>
            <Button color="inherit"href="https://docs.google.com/forms/d/e/1FAIpQLSfUJPS7AULEEIGVdYLSQ1oPwPbUFYkT-KswRTIvDx0CH7W4eQ/viewform">
              <AssignmentIcon fontSize="small" />Survey
            </Button>
          </Toolbar>
        </AppBar>
        </div>
      </React.Fragment>
    )

}

export default Nav;
