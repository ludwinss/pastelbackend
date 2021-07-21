export default function(sequelize,Sequelize){
	class Person extends Sequelize.Model{
		static associate(Models){
			Person.hasMany(Models.Administrator,{
				foreignKey:'id_person'
			})
			Person.hasMany(Models.Employee,{
				foreignKey:'id_person'
			})
		}
	}
	Person.init({
		id_person:{
			type:Sequelize.DataTypes.INTEGER,
			allowNull:false,
			autoIncrement:true,
			primaryKey:true,
			unique:true
		},
		fullname:{
			type:Sequelize.DataTypes.STRING(255),
			allowNull:false
		},
		landline:Sequelize.DataTypes.STRING(45),
		cellphone:Sequelize.DataTypes.STRING(45),
		address:Sequelize.DataTypes.STRING(255),
		email:{
			type:Sequelize.DataTypes.STRING(255),
			allowNull:false
		},
		password:{
			type:Sequelize.DataTypes.STRING(255),
			allowNull:false
		},
		birthday:Sequelize.DataTypes.DATE,
		image:Sequelize.DataTypes.STRING(255)
	},{
		modelName:'person',
		sequelize
	})
	return Person;
}
