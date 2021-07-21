import models from '../models';
import PersonService from './person.service';

const {
	Administrator,
	Employee
} = models;

export default class LoginService extends PersonService{
	#idLogin;
	constructor(idLogin,idPerson,email,password,fullname,landline,cellphone,address,image,birthday){
		super(idPerson,email,password,fullname,landline,cellphone,address,image,birthday);
		this.#idLogin=idLogin;
	}
	async signup(isEmployee=true){
		try{
			let newUser=await super.add();
			if(newUser){
				if(isEmployee){
					console.log(newUser)
					return Employee.create({
						id_person:newUser.id_person
					})
				}else{
					return Administrator.create({
						id_person:newUser.id_person
					})
				}
			}
			return null;
		}catch(e){
			console.error(e);
			return null;
		}
	}
	async signin(){
		try{
			let foundPerson=await super.listByEmail();
			if(foundPerson){
				if(await super.comparePassword(foundPerson.password)){
					let isEmployee=await Employee.findOne({
						where:{
							id_person:foundPerson.id_person
						}
					})
					if(isEmployee){
						return {foundPerson,isEmployee};
					}else{
						let isAdmin=await Administrator.findOne({
							where:{
								id_person:foundPerson.id_person
							}
						})
						return {foundPerson,isAdmin}
					}
				}
				return null;
			}
			return null;
		}catch(e){
			console.error(e);
			return null;
		}
	}
}
