import Sequelize from 'sequelize';

import AddTask from './addTask.model';
import Administrator from './administrator.model';
import Employee from './employee.model';
import Make from './make.model';
import Person from './person.model';
import Task from './task.model';

import config from '../globals/config';

const models={};

try{

	const sequelize=new Sequelize(config().db);

	models['AddTask']=AddTask(sequelize,Sequelize);
	models['Administrator']=Administrator(sequelize,Sequelize);
	models['Employee']=Employee(sequelize,Sequelize);
	models['Make']=Make(sequelize,Sequelize);
	models['Person']=Person(sequelize,Sequelize);
	models['Task']=Task(sequelize,Sequelize);

	Object.values(models).forEach(values=>{
		if(values.associate){
			values.associate(models)
		}
	})
	
}catch(e){
	console.error('Unable to connect to the Database',e);
}

export default models;

