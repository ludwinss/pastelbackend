import React from 'react';

import DatePicker from 'react-date-picker';
import{
  Grid,
  Button,
  FormControl,
  TextField,
  MenuItem,
} from '@material-ui/core';
  
import{withStyles} from '@material-ui/core/styles';
import styles from '../themes/adminStyle';

import { getAllEmployees , newTask} from '../services/login.service';

class NewTask extends React.Component{
  constructor(props){
    super(props);
    this.state={
      task:{
        name:'',
        priority:'medium',
        description:'Don\'t Have description',
        idEmployee:null,
        dateFinish:new Date()
      },
      employees:[]
    }
    this.handleTask=this.handleTask.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleDateTask=this.handleDateTask.bind(this);
  }
  
  async componentDidMount(){
    let {task}=this.state;
    let arrayTask=await getAllEmployees();
    console.log(arrayTask)
    this.setState({
      ...task,
      employees:arrayTask
    })
  }
  handleDateTask(date){
    let {task}=this.state;
    this.setState({
      task:{
        ...task,
        dateFinish:date 
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
    await newTask(this.state.task)
    alert('Done')
    window.location.replace('/')
  }
  render(){
    const {classes}=this.props;
    return(
      <div>
        {this.state.employees.length>0?
        <Grid container
          className={classes.root}
        >
          <Grid item xs={12}>
            <h3>ADD NEW TASK</h3>
              <TextField className={classes.textField}
                label="Task for " 
                name="idEmployee" 
                value={this.state.task.idEmployee}
                margin='normal' 
                select 
                onChange={this.handleTask}>
                {( this.state.employees ).map(employee=>
                  <MenuItem value={employee.employees[0].id_employee}>{ employee.email}</MenuItem>
                )}
              </TextField>
            
          </Grid>
          <Grid item xs={12}>
            <FormControl className={classes.textField}>
              <TextField
                id='name'
                label='Name'
                placeholder='Insert a New Task Name'
                margin='normal'
                required
                fullWidth
                onChange={this.handleTask}
              /> 
              <TextField label="Priority" name="priority" value={this.state.task.priority} margin='normal' select onChange={this.handleTask}>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </TextField>
              <p>Date Finish</p>
               <DatePicker
                 format='y-MM-dd'
                 onChange={(date)=>this.handleDateTask(date)}
                 value={this.state.task.dateFinish}
               />
              <TextField
                id='description'
                label='Description'
                placeholder='Insert a Description'
                multiline
                margin='normal'
                onChange={this.handleTask}
                rows={6}
                required
                fullWidth
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button onClick={this.handleSubmit}>
              Register
            </Button>
          </Grid>
        </Grid>
        :<h2>You Need to Employees for add Tasks</h2> }
      </div>
    )
  }
}

export default withStyles(styles)( NewTask );
