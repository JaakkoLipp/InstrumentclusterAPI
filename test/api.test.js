// test/api.test.js
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app'); // Adjust the path according to your project structure

describe('POST /gpiodata', function() {
  it('should receive a list and respond with a message', function(done) {
    request(app)
      .post('/gpiodata')
      .send({ GPIOLIST: ["item1", "item2", "item3"] })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.have.property('message').that.equals('List received');
        expect(res.body).to.have.property('receivedList').that.is.an('array');
        done();
      });
  });
});

describe('GET /gpiodata', function() {
    it('should send the GPIOList', function(done) {
      request(app)
        .get('/gpiodata')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
            // Check if the response has a property 'GPIOList' which should be an array
          expect(res.body).to.have.property('GPIOList').that.is.an('array');
          done();
        });
    });
  });
