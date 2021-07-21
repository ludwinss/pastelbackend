import models from '../models';
import bcryptjs from 'bcryptjs';

const {Person}=models;

export default class PersonService{
	#idPerson;
	#fullname;
	#landline;
	#cellphone;
	#address;
	#email;
	#password;
	#image;
	#birthday;
	constructor(idPerson,email,password,fullname,landline,cellphone,address,image,birthday){
		this.#idPerson=idPerson;
		this.#fullname=fullname;
		this.#landline=landline;
		this.#cellphone=cellphone;
		this.#address=address;
		this.#email=email;
		this.#password=password;
		this.#image=image;
		this.#birthday=birthday;
	}
	async add(){
		try{
			let foundPerson=await Person.findOne({
				where:{
					email:this.#email
				}
			});
			if(!foundPerson){
				const salt=await bcryptjs.genSalt(10);
				this.#password=await bcryptjs.hash(this.#password,salt) ;
				return Person.create({
					fullname:this.#fullname,
					email:this.#email,
					landline:this.#landline,
					cellphone:this.#cellphone,
					address:this.#address,
					password:this.#password,
					image:this.#image,
					birthday:this.#birthday
				})
			}
			return null;
		}catch(e){
			console.error(e);
			return null;
		}
	}
	static listAll(){
		return Person.findAll();
	}
	listByEmail(){
		return Person.findOne({
			where:{
				email:this.#email
			}
		});
	}
 	comparePassword(pwd){
		return bcryptjs.compare(this.#password,pwd);
	}
	async delete(){
		try{
			let foundPerson=await Person.findByPk(this.#idPerson);
			await foundPerson.destroy();
			return true;
		}catch(e){
			console.error(e);
			return  null;
		}
	}
}
