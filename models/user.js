import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conncetion.js';

export const Users = sequelize.define(
	'users',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		token: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		token_expiration: {
			type: DataTypes.DATEONLY,
			allowNull: true,
		},
	},
	{
		timestamps: true,
		freezeTableName: true,
	}
);
