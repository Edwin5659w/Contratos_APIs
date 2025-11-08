const request = require('supertest');
const app = require('../src/index'); // Asegúrate de que la ruta sea correcta

describe('Health Controller', () => {
    it('should return a 200 status and a message', async () => {
        const response = await request(app).get('/health');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'API is healthy' });
    });
});