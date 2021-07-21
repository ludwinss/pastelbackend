import React from 'react';

import{
  Grid,
  Button,
} from '@material-ui/core';
  
import {withStyles} from '@material-ui/core/styles';
import styles from '../themes/adminStyle';

import { getMyTask ,terminatedTask } from '../services/login.service';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  buttons:{
    backgroundColor:'black',
    color:'white',
    '&:hover':{
      color:'black'
    }
  }
});

function Row(props) {
  const { task } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  
  async function handleIdTask(e){
    let res=window.confirm('Are you sure finish the Task');
    if(res){
      let isDone=await terminatedTask(e.currentTarget.value);
      if(isDone){
        alert("Done")
        window.location.replace('/')
      }else{
        alert('Unexpected error')
      }
    }
  }
  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {task.id_task}
        </TableCell>
        <TableCell align="center">{task.name}</TableCell>
        <TableCell align="center">{task.priority}</TableCell>
        <TableCell align="center">{task.description}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Status
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="center">DATE START</TableCell>
                    <TableCell align="center">DATE FINISH</TableCell>
                    <TableCell align="center">STATUS</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={task.id_task}>
                    <TableCell component="th" scope="row" align='center'>
                      {task.make.date_start}
                    </TableCell>
                    <TableCell align='center'>{task.make.date_finish}</TableCell>
                    <TableCell align='center'>{task.make.status}</TableCell>
                    <TableCell align='center'>
                      {task.make.status!=='terminated'?
                        <Button
                          className={classes.buttons}
                          value={task.id_task}
                          onClick={handleIdTask}
                        >
                          Terminated?
                        </Button>:<></>
                      }
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}



function CollapsibleTable(props) {
  const {tasks}=props;
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>ID</TableCell>
            <TableCell align="center">NAME</TableCell>
            <TableCell align="center">PRIORITY</TableCell>
            <TableCell align="center">DESCRIPTION</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values( tasks ).map((task) => (
            <Row key={task.id_task} task={task} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
class MyTask extends React.Component{
  state={
    tasks:[]
  }
  async componentDidMount(){
    let arrayTask=await getMyTask();
    console.log(arrayTask)
    this.setState({
      tasks:arrayTask
    })
  }
  render(){
    const {classes}=this.props;
    return(
      <div>
        <Grid container
          className={classes.root}
        >
          <Grid item xs={12}>
            <h3>ALL MY TASK</h3>
          </Grid>
          <Grid item xs={12}>
            {this.state.tasks && this.state.tasks.length>0?<CollapsibleTable tasks={this.state.tasks}/> :<h4>No Encontrado</h4>}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(MyTask);
