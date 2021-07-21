import React from 'react';

import{
  Grid,
  Button,
} from '@material-ui/core';
  
import{withStyles} from '@material-ui/core/styles';
import styles from '../themes/adminStyle';

import { getAllTask } from '../services/login.service';
import CollapsibleTable from './table.component';

class Admintask extends React.Component{
  state={
    tasks:[]
  }
  async componentDidMount(){
    let arrayTask=await getAllTask();
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
            <h3>Task Manager</h3>
          </Grid>
          <Grid item xs={12}>
            {this.state.tasks?<CollapsibleTable tasks={this.state.tasks}/> :<h4>No Encontrado</h4>}
          </Grid>
          <Grid item xs={12}>
            <Button>
              Nose paq
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)( Admintask );
