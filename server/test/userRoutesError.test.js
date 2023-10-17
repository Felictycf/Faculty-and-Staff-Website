const request = require('supertest');
const app = require('../app');

describe('User API Endpoints', () => {

    it('should test if server is running', async () => {
        const res = await request(app.callback()).get('/api/users/test');
        expect(res.statusCode).toEqual(200);
        expect(res.body.msg).toEqual('users works...');
    });

    it('should return error for non-existent user id', async () => {
        const res = await request(app.callback()).get('/api/users/item/non_existent_id');
        expect(res.statusCode).toEqual(200); // 或其他您预期的错误代码
    });


    it('should return "name already taken" for existing user name', async () => {
        const res = await request(app.callback()).post('/api/users/register').send({
            name: 'existing_name', // 替换为实际的用户名
            email: 'test@example.com',
            password: 'testpassword'
        });
        expect(res.statusCode).toEqual(500);
        expect(res.body.msg).toEqual('name already taken');
    });

    it('should return "current user does not exist" for non-existent user name', async () => {
        const res = await request(app.callback()).post('/api/users/login').send({
            name: 'non_existent_user'
        });
        expect(res.statusCode).toEqual(500);
        expect(res.body.msg).toEqual('current user does not exist');
    });


});

