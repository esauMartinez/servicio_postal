import { PostalCode } from '../models/postal_codes.js';

export const getCodes = async (code) =>
	await PostalCode.findAll({ where: { d_codigo: code } });
