const app = require('../src/app');
const request = require('supertest');
const expect = require('chai').expect;

describe('post requests', () => {
    it('json response', (done) => { // <-- Asegúrate de incluir done aquí
        request(app)
            .post('/course')
            .send({ name: 'supertest' })
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body.name).to.be.equal('supertest');
                done(); // <-- Llama a done al final
            });
    });

    it('form response', (done) => { // <-- Incluir done aquí también
        request(app)
            .post('/course')
            .send('name=supertest')
            .set('Accept', 'application/x-www-form-urlencoded')
            .expect(200, { id: '2', name: 'supertest' }, done);
    });
});