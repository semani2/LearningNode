const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('should return hello world', (done) => {
    request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
        //This is from the expect module
        expect(res.body).toInclude({
            error: 'Page not found'
        })
    })
    .end((err, res) => {
        if(err) {
            throw err;
        }
        done();
    });
});

it('should return users', (done) => {
    request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
        expect(res.body).toInclude({
            name: 'Sai',
            age: 25
        })
    })
    .end((err, res) => {
        if(err) {
            throw err;
        }
        done();
    });
});