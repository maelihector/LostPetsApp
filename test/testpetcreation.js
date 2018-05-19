process.env.NODE_ENV = 'test';

let sequelize = require('sequelize');
let Pet = ('../models/pet.js');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('pet model', () => {

	describe('test pet creation', () => {
		it('should create a new pet in db', (done) => {
			chai.request(server)
				.post('/api/pets')
				.send({
			      animal: 'cat',
			      color: 'grey',
			      size: 'small',
			      zip: '78748',
			      lost: true,
			      // date: '',
			      img: 'http://via.placeholder.com/150x150',
			      comment: 'lost pet',
			      name: 'kitty',
			      email: 'daniel.hayes@gmail.com'
			    })
				.end((err, res) => {
					res.should.have.status(201);
					res.body.animal.should.equal('cat');
					res.body.color.should.equal('grey');
					res.body.size.should.equal('small');
					res.body.zip.should.equal('78748');
					res.body.lost.should.equal(true);
					res.body.img.should.equal('http://via.placeholder.com/150x150');
					res.body.comment.should.equal('lost pet');
					res.body.name.should.equal('kitty');
					res.body.email.should.equal('daniel.hayes@gmail.com');
					done();
				});
		});

		it('get all pets in db', (done) => {
			chai.request(server)
				.get('/api/pets')
				.end((err, res) => {
					res.body.should.be.an('array');
					// assertion checks
					// res.should.have.status(200);
					// res.body.animal;
					// res.body.color;
					// res.body.size;
					// res.body.zip;
					// res.body.lost;
					// res.body.img;
					// res.body.comment;
					// res.body.name;
					// res.body.email;
					done();
				});
		});
	});

});