const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const writeFile = require('../writeFile');
const FILE_CONTENT = 'A prática leva a perfeição';

describe('Execute the writeFile function', () => {
	before(() => {
		sinon
			.stub(fs, 'writeFile');
	});

	after(() => {
		fs.writeFile.restore();
	});
	
	describe('When the file exists', () => {
		it("It's a string", () => {
			const answer = writeFile('file.txt', FILE_CONTENT);

			expect(answer).to.be.a('string');
		});

		it('Equals "OK"', () => {
			const answer = writeFile('file.txt', FILE_CONTENT);

			expect(answer).to.be.equals('OK');
		});
	});
});
