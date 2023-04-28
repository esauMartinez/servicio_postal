import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export const sequelize = new Sequelize(
	process.env.POSTAL_SERVICE_DATABASE,
	process.env.POSTAL_SERVICE_USERNAME,
	process.env.POSTAL_SERVICE_PASSWORD,
	{
		host: process.env.POSTAL_SERVICE_HOST,
		dialect: 'mysql',
		logging: false,
	}
);
