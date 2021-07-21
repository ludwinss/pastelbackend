export default function(sequelize,Sequelize){
	class AddTask extends Sequelize.Model{
	}
	AddTask.init({
		id_task:{
			type:Sequelize.DataTypes.INTEGER,
			allowNull:false,
			primaryKey:true,
		},
		id_administrator:{
			type:Sequelize.DataTypes.INTEGER,
			allowNull:false,
			primaryKey:true,
		},
		date:{
			type:Sequelize.DataTypes.DATE,
			allowNull:false
		},
	},{
		modelName:'add_task',
		sequelize
	})
	return AddTask;
}
