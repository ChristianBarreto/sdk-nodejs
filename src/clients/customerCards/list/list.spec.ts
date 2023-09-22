import { RestClient } from '@utils/restClient';
import { MercadoPagoConfig } from '@src/mercadoPagoConfig';
import list from '.';

jest.mock('@utils/restClient');

describe('Testing customer cards, list', () => {
	test('should pass foward request options from list to RestClient.fetch', async () => {
		const client = new MercadoPagoConfig({ accessToken: 'token', options: { timeout: 5000 } });
		await list({ customerId: '123', config: client });
		const spyFetch = jest.spyOn(RestClient, 'fetch');
		expect(spyFetch).toHaveBeenCalledWith('/v1/customers/123/cards', { 'headers': { 'Authorization': 'Bearer token' }, 'timeout': 5000 });
	});
});
