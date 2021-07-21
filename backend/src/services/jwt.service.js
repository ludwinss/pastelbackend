import JWT from 'jsonwebtoken';

export default{
	sign:(payload)=>{
		try{
			return JWT.sign(payload,process.env.JWT_SECRET,{
				expiresIn:'1d',
				algorithm:'HS256'
			})
		}catch(e){
			console.log(e);
			return res.status(500).send({
				message:'Internal error',
				auth:false
			})
		}
	},
	verify:(req,res,next)=>{
		try{
			let token=req.headers['x-access-token'];
			if(token){
				let isToken=JWT.verify(token,process.env.JWT_SECRET);
				if(!isToken){
					return res.status(401).send({
						message:'Invalid Token,Try Again',
						auth:false
					})
				}
				return next();
			}
			return res.status(401).send({
				message:'Don\'t provider any Token,Try Again',
				auth:false
			})
		}catch(e){
			console.log(e);
			return res.status(400).send({
				message:'Invalid Token',
				auth:false
			})
		}
	},
	isAdmin:(req,res,next)=>{
		try{
			let token=req.headers['x-access-token'];
			if(token){
				let person=JWT.verify(token,process.env.JWT_SECRET)
				if(person.rol==='administrator'){
					req.idAdministrator=person.idRol;
					return next();
				}else{
					return res.status(401).send({
						message:'Unauthorized',
					})
				}
			}else{
				res.status(401).send({
					message:'Not provide any Token',
					auth:false
				})
			}
		}catch(e){
			console.log(e);
			return res.status(400).send({
				message:'Invalid Token',
				auth:false
			})
		}
	},
	isEmployee:(req,res,next)=>{
		try{
			let token=req.headers['x-access-token'];
			if(token){
				let person=JWT.verify(token,process.env.JWT_SECRET)
				if(person.rol=='employee'){
					req.idEmployee=person.idRol;
					return next();
				}else{
					return res.status(401).send({
						message:'Unauthorized',
					})
				}
			}else{
				res.status(401).send({
					message:'Not provide any Token',
					auth:false
				})
			}
		}catch(e){
			console.log(e);
			return res.status(400).send({
				message:'Invalid Token',
				auth:false
			})
		}
	},
}
