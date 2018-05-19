process.env.NODE_ENV = 'test';

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

// test module
describe('testing html routes', () => {
	// test suite
	describe('GET html routes', () => {
		// individual tests
		it('should GET the / route', (done) => {
			chai.request(server)
				.get('/')
				.end((err, res) => {
					// assertion checks
					res.should.have.status(200);

					// once all assertion checks are done, call the done() function; and the done
					// function is 'mocha' specific so that it can do some cleaning up 
					// after the test has been run; also, when done() is called, it knows to move on
					// to the next test
					done();
				});
		});

		// individual test
		it('should GET the /shelters route', (done) => {
			chai.request(server)
				.get('/shelters')
				.end((err, res) => {
					res.should.have.status(200);
					done();
				});
		});

		it('should GET the /results route', (done) => {
			chai.request(server)
				.get('/results')
				.end((err, res) => {
					// assertion checks
					res.should.have.status(200);

					done();
				});
		});
	});

});