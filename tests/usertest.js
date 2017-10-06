import chai from 'chai';
import should from 'should';
import dotenv from 'dotenv';
import chaiHttp from 'chai-http';
import app from '../server/app';
import models from '../server/models';

chai.use(chaiHttp);
dotenv.load();
process.env.NODE_ENV = 'test';

models.User.destroy({
  where: {},
  cascade: true,
  truncate: true,
  restartIdentity: true

});

describe('test API routes', () => {
  describe('User sign up route', () => {
    it('POST /api/users/signup creates a new user', (done) => {
      chai.request(app)
        .post('/api/users/signup')
        .type('form')
        .send({
          username: 'iamanewuser',
          password: 'testpassword',
          email: 'test@user.com'
        })
        .end((err, res) => {
          res.status.should.be.eql(201);
          res.body.data.email.should.eql('test@user.com');
          res.body.data.username.should.eql('iamanewuser');
          done();
        });
    });
    it('returns error message when called without an email address', (done) => {
      chai.request(app)
        .post('/api/users/signup')
        .type('form')
        .send({
          username: 'iamanewuser',
          password: 'testpassword',
        })
        .end((err, res) => {
          res.body.message.should.eql('Please enter a valid email');
          done();
        });
    });
    it('returns error message when called without a password', (done) => {
      chai.request(app)
        .post('/api/users/signup')
        .type('form')
        .send({
          username: 'iamanewuser',
          email: 'test@user.com'
        })
        .end((err, res) => {
          res.body.message.should.eql('Please Enter a password with atleast 8 characters');
          done();
        });
    });
    it('returns error message when called without a username', (done) => {
      chai.request(app)
        .post('/api/users/signup')
        .type('form')
        .send({
          email: 'test@user.com',
          password: 'testpassword'
        })
        .end((err, res) => {
          res.body.message.should.eql('Enter a username with atleast 8 characters');
          done();
        });
    });
    it('returns 409 error for duplicate email ', (done) => {
      chai.request(app)
        .post('/api/users/signup')
        .type('form')
        .send({
          username: 'newusername',
          email: 'test@user.com',
          password: 'testpassword'
        })
        .end((err, res) => {
          res.status.should.be.eql(409);
          done();
        });
    });
  });
  describe('User sign in route', () => {
    it('returns error message when called without a password', (done) => {
      chai.request(app)
        .post('/api/users/signin')
        .type('form')
        .send({
          email: 'test@user.com'
        })
        .end((err, res) => {
          res.body.message.should.eql('Password field cannot be empty');
          done();
        });
    });
    it('returns error messagge when called with invalid password or email', (done) => {
      chai.request(app)
        .post('/api/users/signin')
        .type('form')
        .send({
          email: 'test@use.com',
          password: 'testpasswod'
        })
        .end((err, res) => {
          res.status.should.be.eql(401);
          res.body.status.should.be.eql('fail');
          res.body.message.should.be.eql('Invalid Username or Password');
          done();
        });
    });
  });
});