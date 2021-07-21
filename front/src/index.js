import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  BrowserRouter,
  Redirect,
  Switch
} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import {AdminRoute,UserRoute} from './routes/private.route';
import PublicRoute from './routes/public.route';

import Login from './components/login.component';
import SignUp from './components/signup.component';
import Dashboard from './components/dashboard.component';
import NewTask from './components/newtask.component';
import AdminTask from './components/admin.component';
import MyTask from './components/mytask.component';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={createBrowserHistory()}>
      <Switch>
        <PublicRoute exact path='/login/signin' component={Login}/>
        <PublicRoute exact path='/login/signup' component={SignUp}/>
        <AdminRoute exact restricted={localStorage.getItem('rol')==='a'?true:false}  path='/dashboard/newtask'> <Dashboard><NewTask/></Dashboard> </AdminRoute>
        <AdminRoute exact restricted={localStorage.getItem('rol')==='a'?true:false} path='/dashboard/admintask'> <Dashboard><AdminTask/></Dashboard> </AdminRoute>
        <UserRoute exact  path='/dashboard/mytask'> <Dashboard><MyTask/></Dashboard> </UserRoute>
        <Redirect from="*" to='/login/signin'/>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
