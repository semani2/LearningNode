const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app.js');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };
    app.__set__("db", db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Sai', 25);
        expect(spy).toHaveBeenCalledWith('Sai', 25);
    });

    it('should call saveUser with user object', () => {
        var email = 'sai.emani@gmail.com';
        var password = 'abc123';

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalled();
    });

});