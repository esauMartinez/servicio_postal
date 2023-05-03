import express, { json } from 'express';
import http from 'http';
import cors from 'cors';
import logger from 'morgan';
import { sequelize } from './db/conncetion.js';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const server = http.createServer(app);
const port = process.env.PORT || 3800;

import './models/postal_codes.js';
console.log('first');
import './models/user.js';
import service from './routes/service.routes.js';

app.use('/api/v1/postal_code', service);

server.listen(port, async () => {
	try {
		await sequelize.sync({ force: true });
		await sequelize.authenticate();
		console.log('Conexion exitosa a la base de datos');

		// await Roles.create({ name: 'ADMIN' })
		// await Users.create({ name: 'JOSE ESAU',first_name: 'MARTINEZ', last_name: 'CONTRERAS', username: 'martinez117esau@gmail.com', password: 'mace930111!' })
		// await UserRoles.create({ userId: 1, roleId: 1 })
		console.log(`Server listening on port ${port}`);
	} catch (error) {
		throw new Error(error);
	}
});
