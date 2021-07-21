import TaskService from '../services/task.service';
import sendEmail from '../services/mail.service';

export default{
	listAll:async (req,res)=>{
		try{
			let foundTask=await TaskService.listAll();
			if(foundTask){
				res.status(200).send(foundTask);
			}else{
				res.status(402).send({
					message:"Don\'t found"
				})
			}
		}catch(e){
			console.error(e);
			res.status(500).send({
				message:"Internal error"
			})
		}
	},
	add:async (req,res)=>{
		try{
			let {
				idEmployee,
				name,
				priority,
				description,
				dateFinish
			} = req.body;
			let idAdministrator=req.idAdministrator;
			let Task=new TaskService(
				idAdministrator,
				idEmployee,
				null,
				name,
				priority,
				description,
				dateFinish
			);
			let newTask=await Task.add();
			if(newTask){
				let employee=await Task.listByIdEmployee()
				sendEmail(employee.email,`You received a new tasks in de Pastel company please check de Web Page`)
				res.status(200).send({
					newTask
				})
			}else{
				res.status(400).send({
					message:'Bad request'
				})
			}
		}catch(e){
			console.error(e);
			res.status(500).send({
				message:"Internal error"
			})
		}
	},
	listAllMyTask:async (req,res)=>{
		try{
			let foundMyTask=await TaskService.listMyTasks(req.idEmployee)
			if(!foundMyTask){
				res.status(402).send({message:'Dont Found'})
			}
			res.status(200).send(foundMyTask)
		}catch(e){
			console.error(e);
			res.status(500).send({
				message:"Internal error"
			});
		}
	},
	listAllEmployees:async (req,res)=>{
		try{
			let foundAllEmployees=await TaskService.listAllEmployees()
			if(!foundAllEmployees){
				res.status(402).send({message:'Dont Found'})
			}
			res.status(200).send(foundAllEmployees)
		}catch(e){
			console.error(e);
			res.status(500).send({
				message:"Internal error"
			});
		}
	},
	listProgressMyTask:async (req,res)=>{
		try{
			let foundMyTask=await TaskService.listMyTasksInProgress(req.idEmployee)
			if(!foundMyTask){
				res.status(402).send({message:'Dont Found'})
			}
			res.status(200).send(foundMyTask);
		}catch(e){
			console.error(e);
			res.status(500).send({
				message:"Internal error"
			});
		}
	},
	updateStatusMyTask:async (req,res)=>{
		try{
			let idTask=req.params.id;
			let idEmployee=req.idEmployee;
			let {status}=req.body;
			let modStatus=new TaskService(
				null,
				idEmployee,
				idTask,
				null,null,null,null,
				status
			)
			let response=await modStatus.changeStatus();
			if(!response){
				return res.status(400).send({
					message:'Date Limit or Task finished'
				})
			}
			let employee=await modStatus.listByIdEmployee();
			sendEmail('opotunidades@smn.com.br',`The user ${employee.email} finish the task please contanct with him or check the Web Page`)
			res.status(200).send(response);
		}catch(e){
			console.error(e);
			res.status(500).send({
				message:"Internal error"
			});
		}
	},
	deleteTask:async(req,res)=>{
		try{
			let isDelete=await TaskService.deleteTask(req.params.id);
			if(!isDelete){
				return res.status(402).send({
					message:'Instance don\'t found'
				})
			}
			res.status(200).send({
				message:'Done'
			})
		}
		catch(e){
			console.error(e);
			res.status(500).send({
				message:"Internal error"
			});
		}
	}
}
