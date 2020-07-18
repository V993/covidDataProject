import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import CssBaseline from '@material-ui/core/CssBaseline';
//import Container from '@material-ui/core/Container';

class App extends React.Component {
  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <Nav name="APPH"/>
        <Main />
    </React.Fragment>

  )};
}

export default App;
