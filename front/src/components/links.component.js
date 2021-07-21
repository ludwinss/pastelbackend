import React from 'react';

import {Link} from 'react-router-dom';

import styles from '../themes/linksStyle';
import {makeStyles} from '@material-ui/core/styles';
import {
  List,
  ListItem,
  Button,
  Hidden
} from '@material-ui/core';

import ListIcon from '@material-ui/icons/List';
import PersonIcon from '@material-ui/icons/Person';
import CreateIcon from '@material-ui/icons/Create';

const useStyles=makeStyles(styles);

export default function Links(){
  const classes=useStyles();
  const [rol,setRol]=localStorage.getItem('rol')?localStorage.getItem('rol'):'';
  return (
    <List
      className={classes.list}

    >
      {
        rol==='a'?<>
      <ListItem
        className={classes.listItem}
      >
        <Link to='/dashboard/admintask'>
          <Button
            className={classes.link}
            startIcon={<ListIcon/>}
          >
            <Hidden smDown>
               Admin Task
            </Hidden>
          </Button>
        </Link>
      </ListItem>
      <ListItem
        className={classes.listItem}
      >
        <Link to='/dashboard/newtask'>
          <Button
            className={classes.link}
            startIcon={<CreateIcon/>}
          >
            <Hidden smDown>
               New Task
            </Hidden>
          </Button>
        </Link>
      </ListItem>
        </>:<>
        <ListItem
          className={classes.listItem}
        >
          <Link to=''>
            <Button
              className={classes.link}
              startIcon={<PersonIcon/>}
            >
              <Hidden smDown>
                My task
              </Hidden>
            </Button>
          </Link>
        </ListItem>
          </>
      }
    </List>
  )
}
