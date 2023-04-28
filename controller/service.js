import { getCodes } from '../services/service.js';

class Service {
	async getCodes(req, res, next) {
		try {
			const { postal_code } = req.params;
			const data = await getCodes(postal_code);
			res.status(200).send(data);
		} catch (error) {
			next(error);
		}
	}
}

export const service = new Service();
