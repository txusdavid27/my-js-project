const nock = require('nock');
const request = require('supertest');
const expect = require('chai').expect;

describe('mocking response', () => {
    beforeEach(() => {
        nock('http://localhost:4000')
            .get('/users')
            .reply(200, {
                 "users": [{"id":"1"}]
        });
    });
    
    it('nock intercepts', () => {
        request('http://localhost:4000')
            .get('/users')
            .end((err, res) => {
                expect(res.body.users[0].id).to.be.equal("1");
            });
    });
});