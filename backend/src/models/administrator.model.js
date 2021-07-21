export default function(sequelize,Sequelize){
	class Administrator extends Sequelize.Model{
		static associate(Models){
			Administrator.belongsTo(Models.Person,{
				foreignKey:'id_person'
			})
			Administrator.belongsToMany(Models.Task,{
				through:{
					model:Models.AddTask
				},
				foreignKey:'id_administrator',
				onDelete:'CASCADE'
			})
		}
	}
	Administrator.init({
		id_administrator:{
			type:Sequelize.DataTypes.INTEGER,
			allowNull:false,
			autoIncrement:true,
			unique:true,
			primaryKey:true
		},
		id_person:{
			type:Sequelize.DataTypes.INTEGER,
			allowNull:false
		}
	},{
		modelName:'administrator',
		sequelize,
	})
	return Administrator;
}
