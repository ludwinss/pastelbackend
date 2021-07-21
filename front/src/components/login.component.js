import React , {Component} from 'react';

import { signin } from '../services/login.service';

import {withStyles} from '@material-ui/core/styles';
import {
  FormControl,
  TextField,
  Button
} from '@material-ui/core';

import {Link} from 'react-router-dom';

import styles from '../themes/loginStyle';
import background from '../assets/img/background.jpg';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      user:{
        email:'',
        password:''
      }
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  handleChange(e){
    let {user}=this.state;
    this.setState({
      user:{
        ...user,
        [e.target.id]:e.target.value
      }
    })
  }
  async handleSubmit(e){
    await signin(this.state.user);
    alert(localStorage.getItem('message'))
    this.props.history.push('/dashboard');
    e.preventDefault();
  }

  render(){
    const {classes}=this.props;
    return(
      <div 
        className={classes.root}
        style={{backgroundImage:`url(${background})`}}
      >
        <div className={classes.rootForm}>
          <FormControl className={classes.form}>
            <h2>PASTEL LOGIN</h2>
            <p>Log in Your Count</p>
            <TextField 
              className={classes.textField}
              id='email'
              label='email'
              onChange={this.handleChange}
            />
            <TextField 
              className={classes.textField}
              type='password'
              id='password'
              label='password'
              onChange={this.handleChange}
            />
            <Button
              onClick={this.handleSubmit}
            >
              Login
            </Button>
            <p>or</p>
            <p>Subcribe! <Link to='/login/signup'>Here</Link></p>
          </FormControl>
        </div>
      </div>
    )
  }
}

export default withStyles(styles) ( Login );
