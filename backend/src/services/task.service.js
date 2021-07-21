import models from '../models/';
import Sequelize from 'sequelize';

const {
	Task,
	AddTask,
	Administrator,
	Make,
	Employee,
	Person
}=models;

export default  class TaskService{
	#idAdministrator;
	#idEmployee;
	#idTask;
	#name;
	#priority;
	#description;
	#dateFinish;
	#status;
	constructor(idAdministrator,idEmployee,idTask,name,priority='medium',description='Don\'t have description, Good Luck :)',dateFinish,status='progress'){
		this.#idAdministrator=idAdministrator;
		this.#idEmployee=idEmployee;
		this.#idTask=idTask;
		this.#name=name;
		this.#priority=priority;
		this.#description=description;
		this.#dateFinish=dateFinish;
		this.#status=status;
	}
	static listAll(){
		return Task.findAll({
			include:Employee
		});
	}
	async listByIdEmployee(){
		let foundEmployee=await Employee.findByPk(this.#idEmployee)
		return await Person.findByPk(foundEmployee.id_person)
	}
	async add(){
		try{
			let newTask=await Task.create({
				name:this.#name,
				priority:this.#priority,
				description:this.#description
			})
			if(newTask){
				this.#idTask=newTask.id_task;
				await Promise.all([
					AddTask.create({
						id_administrator:this.#idAdministrator,
						id_task:this.#idTask,
						date:Date.now()
					}),
					Make.create({
						id_employee:this.#idEmployee,
						id_task:this.#idTask,
						date_start:Date.now(),
						date_finish:this.#dateFinish,
						status:this.#status
					})
				])
				return newTask;
			}else{
				return null;
			}
		}catch(e){
			console.error(e);
			return null;
		}
	}
	static listMyTasks(id){
		return Employee.findAll({
			where:{
				id_employee:id,
			},
			include:Task
		}) 
	}
	static listAllEmployees(){
		return Person.findAll({include:{
			model:Employee,
			required:true
		}})
	}
	static listMyTasksInProgress(id){
		return Employee.findAll({
			where:{
				id_employee: id
			},
			include:[{
				model:Task,
				through: { where: { status:'progress' } }
			}]
		}) 
	}
	async changeStatus(){
		try{
			console.log(this.#status,this.#idTask,this.#idEmployee)
			let foundTask=await Make.findOne({
				where:{
					id_employee:this.#idEmployee,
					id_task:this.#idTask,
				}
			})
			if(foundTask.status!=='terminated'){
				let diffDate=Math.abs(new Date(foundTask.date_finish)-Date.now());
				diffDate=(Math.ceil(diffDate/(1000*60*60*24)));
				if(diffDate<0){
					foundTask.status='terminated';
				}else{
					foundTask.status=this.#status;
				}
				foundTask.save();
				return foundTask;
			}
			return false;
		}catch(e){
			console.error(e);
			return null;
		}
	}
	static async deleteTask(pk){
		try{
			let foundTask=await Task.findByPk(pk,{
				include:[Employee,Administrator]
			});
			if(!foundTask) return null;
			let idAdministrator=foundTask.administrators[0].id_administrator;
			let idEmployee=foundTask.employees[0].id_employee;
			foundTask.removeAdministrator(idAdministrator);
			foundTask.removeEmployee(idEmployee);
			return await foundTask.destroy();
		}catch(e){
			console.error(e);
			return null;
		}
	}
}
