 import Axios from 'axios';

const TOKEN_KEY='jwt';

function signin(user){
  return Axios.post('https://simulatepastel.herokuapp.com/login/signin',user)
    .then(res=>{
      localStorage.setItem('message',res.data.message)
      localStorage.setItem('rol',res.data.rol)
      localStorage.setItem(TOKEN_KEY,res.data.token)
    })
    .catch((e)=>{
      localStorage.setItem('message',e.response.data.message)
    })
}

function logout(){
  localStorage.clear();
}

function isLogin(){
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return false;
}

function getAllTask(){
  return Axios.get('https://simulatepastel.herokuapp.com/task',{headers:{'x-access-token':localStorage.getItem(TOKEN_KEY)}})
    .then(res=>{
      return res.data;
    })
    .catch(e=>{
      return false;
    })
}
function getMyTask(){
  return Axios.get('https://simulatepastel.herokuapp.com/task/mytasks/all',{headers:{'x-access-token':localStorage.getItem(TOKEN_KEY)}})
    .then(res=>{
      return res.data[0].tasks;
    })
    .catch(e=>{
      return false;
    })
}
function terminatedTask(id){
  Axios.interceptors.request.use(function (config) {
      const token = localStorage.getItem(TOKEN_KEY);
      config.headers['x-access-token'] =  token;

      return config;
  });
  return Axios.put('https://simulatepastel.herokuapp.com/task/mytasks/progress/'+id,{status:'terminated'})
    .then(res=>true)
    .catch(e=>false)
}
function getAllEmployees(){
  return Axios.get('https://simulatepastel.herokuapp.com/task/employees',{headers:{'x-access-token':localStorage.getItem(TOKEN_KEY)}})
    .then(res=>{
      return res.data;
    })
    .catch(e=>{
      return false;
    })
}
function newTask(task){
  Axios.interceptors.request.use(function (config) {
      const token = localStorage.getItem(TOKEN_KEY);
      config.headers['x-access-token'] =  token;

      return config;
  });
  return Axios.post('https://simulatepastel.herokuapp.com/task',task)
    .then(res=>{
      return res.data;
    })
    .catch(e=>{
      return false;
    })
}
function addUser(user){
  return Axios.post('https://simulatepastel.herokuapp.com/login/signup',user)
    .then(res=>{
      localStorage.setItem('message',res.data.message)
      localStorage.setItem('rol',res.data.rol)
      localStorage.setItem(TOKEN_KEY,res.data.token)
      return res.data;
    })
    .catch(e=>{
      return false;
    })
}
export {
  signin,
  isLogin,
  logout,
  getAllTask,
  getMyTask,
  getAllEmployees,
  newTask,
  addUser,
  terminatedTask
};
