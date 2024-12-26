const express = require('express')
const request = require('supertest')
const expect = require('chai').expect

const app = express();

app.get('/first', (err, res) => {
  res.status(200).json({'OK':"response"});
});

describe('First test', () => {
  it('OK response', () => {
    request(app)
      .get('/first')
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
      });
  });

  it('Mocky OK response', (done) => {
    request('http://www.mocky.io')
      .get('/v3/cb1fe20a-8944-42fc-924e-be92d2f294c6')
      .expect(200,done);
  });

});