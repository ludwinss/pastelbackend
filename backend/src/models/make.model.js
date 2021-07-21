export default function(sequelize,Sequelize){
	class Make extends Sequelize.Model{
	}
	Make.init({
		id_task:{
			type:Sequelize.DataTypes.INTEGER,
			allowNull:false,
			primaryKey:true,
		},
		id_employee:{
			type:Sequelize.DataTypes.INTEGER,
			allowNull:false,
			primaryKey:true,
		},
		date_start:{
			type:Sequelize.DataTypes.DATE,
			allowNull:false
		},
		date_finish:Sequelize.DataTypes.DATE,
		status:{
			type:Sequelize.DataTypes.STRING(11),
			allowNull:false
		}
	},{
		modelName:'make',
		sequelize
	})
	return Make;
}
