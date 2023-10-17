const request = require('supertest');
const app = require('../app');  // Koa应用程序导入了app实例

describe('User Routes', () => {
    it('should return "users works..." for GET /test', async () => {
        const res = await request(app.callback()).get('/api/users/test');
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('users works...');
    });

    // 测试/item/:id路由 (这里我们使用了假id，真实的用户id)
    it('should return user information for GET /item/:id', async () => {
        const res = await request(app.callback()).get('/api/users/item/some-id');
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('ok');
    });
    let userId;
    const username = 'testuserxxx';
    const password = 'testpassword';

    it('should register a new user', async () => {
        const res = await request(app.callback()).post('/api/users/register').send({
            name: username,
            password: password
        });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('id');
        userId = res.body.id;  // 保存新注册用户的ID以供后续测试使用
    });

    it('should login the user', async () => {
        const res = await request(app.callback()).post('/api/users/login').send({
            name: username,
            password: password
        });

        expect(res.statusCode).toEqual(200);
    });

// 测试/list路由
    it('should return a list of users based on query', async () => {
        // 这里我们使用一个假设的查询参数 name。你可能需要根据你的需求进行修改。
        const queryParam = {
            name: 'testuser'
        };

        const res = await request(app.callback()).get('/api/users/list').query(queryParam);
        expect(res.status).toBe(200);
        expect(res.body.msg).toBe('ok');
        expect(res.body.list[0]).toHaveProperty('name', queryParam.name);
    });


});

