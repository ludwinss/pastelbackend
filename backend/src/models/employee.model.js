export default function(sequelize,Sequelize){
	class Employee extends Sequelize.Model{
		static associate(Models){
			Employee.belongsTo(Models.Person,{
				foreignKey:'id_employee'
			})
			Employee.belongsToMany(Models.Task,{
				through:{
					model:Models.Make
				},
				foreignKey:'id_employee',
				onDelete:'CASCADE'
			})
		}
	}
	Employee.init({
		id_employee:{
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
		modelName:'employee',
		sequelize,
	})
	return Employee;
}
