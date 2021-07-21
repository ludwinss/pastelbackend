import dotenv from 'dotenv';

const envFound=dotenv.config();

if(envFound.error){
	console.error('Unable to find config file',envFound.error)
}
export default function(){
	if(process.env.DEV=='true'){
		return {
			db:{
				dialect:process.env.DB_DEV_DIALECT,
				host:process.env.DB_DEV_HOST,
				port:process.env.DB_DEV_PORT,
				database:process.env.DB_DEV_NAME,
				username:process.env.DB_DEV_USERNAME,
				password:process.env.DB_DEV_PASSWORD,
				define:{
					timestamps:false,
					freezeTableName:true
				}
			},
			jwtSecret:process.env.JWT_SECRET
		}
	}
	return{
		db:{
			dialect:process.env.DB_PRO_DIALECT,
			host:process.env.DB_PRO_HOST,
			port:process.env.DB_PRO_PORT,
			database:process.env.DB_PRO_NAME,
			username:process.env.DB_PRO_USERNAME,
			password:process.env.DB_PRO_PASSWORD,
			define:{
				timestamps:false,
				freezeTableName:true
			},
			native:true,
			ssl:true
		},
		jwtSecret:process.env.JWT_SECRET
	}
}
