// test/api.test.js
const request = require('supertest');
const expect = require('chai').expect;
const app = require('../app'); // Adjust the path according to your project structure

describe('POST /gpiodata', function() {
  it('should receive a list and respond with a message', function(done) {
    request(app)
      .post('/gpiodata')
      .send({
        "GPIOLIST": [
        "3",        // 0: Gear (str)
        60,             // 1: Speed (int)
        3000,           // 2: RPM (int)
        false,          // 3: BlinkLeft (Boolean)
        true,           // 4: BlinkRight (Boolean)
        false,          // 5: LongLight (Boolean)
        false,          // 6: CheckEngine (Boolean)
        true,           // 7: CheckOil (Boolean)
        "Trip: 69420KM", // 8: StatusText (str)
        "21:11",        // 9: Clock (str)
        false,          // 10: NightPanel (Boolean)
        false,          // 11: CheckFuel (Boolean)
        "90°C"          // 12: WaterTemp (str)
    ]})
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
