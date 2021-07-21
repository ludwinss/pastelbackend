import React from 'react';

import DatePicker from 'react-date-picker';
import{
  Grid,
  Button,
  FormControl,
  TextField,
} from '@material-ui/core';
  
import{withStyles} from '@material-ui/core/styles';
import styles from '../themes/adminStyle';

import { addUser} from '../services/login.service';

class SignUp extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task:{
        fullname:'',
        landline:'',
        cellphone:'',
        address:'',
        password:'',
        email:'',
        birthday:new Date()
      },
    }
    this.handleTask=this.handleTask.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleDateTask=this.handleDateTask.bind(this);
  }
  
  handleDateTask(date){
    let {task}=this.state;
    this.setState({
      task:{
        ...task,
        birthday:date 
      }
    })
  }
  handleTask(e){
    let id='';
    if(e.target.id){
      id=e.target.id
    }else{
      id=e.target.name
    }
    let {task}=this.state;
    this.setState({
      task:{
        ...task,
        [id]:e.target.value
      }
    })
  }
  async handleSubmit(){
    await addUser(this.state.task)
    alert('Done')
    window.location.replace('/login/signin')
  }
  render(){
    const {classes}=this.props;
    return(
      <div>
        <Grid container
          className={classes.root}
        >
          <Grid item xs={12}>
            <h3>NEW USER</h3>
          </Grid>
          <Grid container>
          <Grid item xs={8}>
            <FormControl className={classes.textField}>
              <TextField
                id='fullname'
                label='Full Name'
                placeholder='Insert Full Name'
                margin='normal'
                required
                fullWidth
                onChange={this.handleTask}
              /> 
              <TextField
                id='landline'
                label='Landline'
                placeholder='Insert a New Phone'
                margin='normal'
                required
                onChange={this.handleTask}
              /> 
              <TextField
                id='cellphone'
                label='Cellphone'
                placeholder='Insert a New Phone'
                margin='normal'
                required
                onChange={this.handleTask}
              /> 
              <TextField
                id='email'
                label='Email'
                placeholder='Whats is ur Email'
                type='email'
                margin='normal'
                required
                onChange={this.handleTask}
              /> 
              <TextField
                id='password'
                label='Password'
                type='password'
                placeholder='Passwor?'
                margin='normal'
                required
                onChange={this.handleTask}
              /> 
              <p>Birthday</p>
               <DatePicker
                 format='y-MM-dd'
                 onChange={(date)=>this.handleDateTask(date)}
                 value={this.state.task.birthday}
               />
            </FormControl>
          </Grid>
            <Grid item xs={4} className={classes.back}>
              <p>Your Full Name: {this.state.task.fullname}</p>
              <p>Your Email: {this.state.task.email}</p>
              <p>Your Landline: {this.state.task.landline}</p>
              <p>Your CellPhone: {this.state.task.cellphone}</p>
              <p>Your Birthday: {this.state.task.birthday+''}</p>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={this.handleSubmit}>
              Register
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(SignUp);
