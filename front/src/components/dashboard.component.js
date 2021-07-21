import React from 'react';

import {
  Button,
  Grid,
  Hidden
} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

import {logout,isLogin} from '../services/login.service';

import Links from './links.component';
import styles from '../themes/dashboardStyle';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

class Dashboard extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isLogin:isLogin()
    }
  }
  handleLogout(){
    logout();
    this.setState({
      isLogin:false
    })
  }
  render(){
    const {classes}=this.props;
    return(
      <>
        <Grid
          container
          className={classes.root}
        >
          <Grid item xs={2}
            className={classes.bar}
          >
            <Hidden xsDown>
              <h3>Pastel Company</h3>
            </Hidden>
            <Links/>
            {
              this.state.isLogin?
                <Button
                  className={classes.button}
                  startIcon={
                    <Hidden smUp>
                      <PowerSettingsNewIcon/>
                    </Hidden>
                  }
                  onClick={()=>this.handleLogout()}
                >
                  <Hidden xsDown>
                    logout
                  </Hidden>
                </Button>:
              window.location.replace('/login/signin')
            }
          </Grid>
          <Grid item xs={10}>
            {this.props.children}
          </Grid>
        </Grid>
      </>
    )
  }
}

export default withStyles (styles)( Dashboard );
