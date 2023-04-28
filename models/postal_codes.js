import { DataTypes } from 'sequelize';
import { sequelize } from '../db/conncetion.js';

export const PostalCode = sequelize.define(
	'postal_codes',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			allowNull: false,
			autoIncrement: true,
		},
		d_codigo: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		d_asenta: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		d_tipo_asenta: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		D_mnpio: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		d_estado: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		d_ciudad: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		d_CP: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		c_estado: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		c_oficina: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		c_CP: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		c_tipo_asenta: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		c_mnpio: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		id_asenta_cpcons: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		d_zona: {
			type: DataTypes.STRING,
			allowNull: true,
		},
		c_cve_ciudad: {
			type: DataTypes.STRING,
			allowNull: true,
		},
	},
	{
		timestamps: false,
		freezeTableName: true,
	}
);
