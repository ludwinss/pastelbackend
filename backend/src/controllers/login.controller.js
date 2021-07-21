import JWT from '../services/jwt.service';
import LoginService from '../services/login.service';

export default{
	signup:async (req,res,next)=>{
		try{
			const { 
				email,
				password,
				fullname,
				landline,
				cellphone,
				address,
				birthday
			}=req.body;
			const image=req.pathImg;
			let newLogin=new LoginService(
				null,
				null,
				email,
				password,
				fullname,
				landline,
				cellphone,
				address,
				image,
				birthday
			);

			let addNewUser=await newLogin.signup();

			if(addNewUser){
				let login=await newLogin.listByEmail();
				if(addNewUser.id_employee){
					res.status(200).send({
						message:'Welcome '+login.fullname,
						rol:'employee',
						token:JWT.sign({
							email:login.email,
							fullname:login.fullname,
							rol:'employee',
							idRol:addNewUser.id_employee,
							landline:login.landline,
							cellphone:login.cellphone,
							address:login.address,
							image:login.image,
							birthday:login.birdthday
						})
					})
				}else{
					res.status(200).send({
					message:'Welcome '+login.fullname,
					rol:'administrator',
					token:JWT.sign({
							email:login.email,
							rol:'administrator',
							idRol:addNewUser.id_administrator,
							fullname:login.fullname,
							image:login.image,
						})
					})
				}
			}else{
				res.status(400).send({
					message:'Wrong data or Email Duplicate',
					auth:false
				})
			}
		}catch(e){
			console.error(e);
			res.status(500).send({
				message:'Internal error',
			})
		}
	},
	signin:async (req,res)=>{
		try{
			const { 
				email,
				password,
			}=req.body;

			let newLogin=new LoginService(
				null,
				null,
				email,
				password
			);

			let foundUser=await newLogin.signin();

			if(foundUser){
				let {foundPerson,isEmployee}=foundUser;
				if(isEmployee){
					res.status(200).send({
						message:'Welcome '+foundPerson.fullname,
						rol:'employee',
						token:JWT.sign({
							email:foundPerson.email,
							rol:'employee',
							idRol:isEmployee.id_employee,
							fullname:foundPerson.fullname,
							landline:foundPerson.landline,
							cellphone:foundPerson.cellphone,
							address:foundPerson.address,
							image:foundPerson.image,
							birthday:foundPerson.birdthday
						})
					})
				}else{
					res.status(200).send({
						message:'Welcome '+foundPerson.fullname,
						rol:'administrator',
						token:JWT.sign({
							email:foundPerson.email,
							rol:'administrator',
							idRol:foundUser.isAdmin.id_administrator,
							fullname:foundPerson.fullname,
							image:foundPerson.image,
						})
					})
				}
			}else{
				res.status(400).send({
					message:"Wrong Email or Password",
					auth:false
				})
			}
		}catch(e){
			console.error(e);
			res.status(500).send({
				message:'Internal error',
			});
		}
	}
}
