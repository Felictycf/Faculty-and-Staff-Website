const request = require('supertest');
const app = require('../app');
const mongoose = require("mongoose"); // Import your Koa app

describe('Database Connection Test', () => {
    beforeAll(async () => {
        // You can use a separate test database or a different connection URI
        await mongoose.connect('mongodb://cg:lianshi@47.113.221.19:27017/teacher-system?authSource=teacher-system', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    });

    afterAll(async () => {
        // Close the test database connection after running all tests
        await mongoose.disconnect();
    });

    it('should connect to the test MongoDB database', async () => {
        expect(mongoose.connection.readyState).toBe(2); // Check if the connection is open (1)
    });

    // Add more tests for your Koa routes and functionality here
});
