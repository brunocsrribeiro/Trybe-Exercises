const { expect } = require('chai');

const setOfNumbers = require('../../setOfNumbers');

describe('setOfNumbers', () => {
  describe('When the number is greater than 0', () => {
    it("It's a string", () => {
      const answer = setOfNumbers(5);

      expect(answer).to.be.a('string');
    });

    it('Is equal to "positive"', () => {
     const answer = setOfNumbers(5);
     
     expect(answer).to.be.equals('positive');
    });
  });
  
  describe('When the number is less than 0', () => {
    it("It's a string", () => {
      const answer = setOfNumbers(-5);
      
      expect(answer).to.be.a('string');
    });
    
    it('Is equal to "negative"', () => {
      const answer = setOfNumbers(-5);
      
      expect(answer).to.be.equals('negative');
    });
  });

  describe('When the number is equal to 0', () => {
    it("It's a string", () => {
     const answer = setOfNumbers(0);

     expect(answer).to.be.a('string');
   });
  
   it('This number is "neutral"', () => {
    const answer = setOfNumbers(0);
    
    expect(answer).to.be.equals('neutral')
   });
  });

  describe('When the passed parameter is not a number', () => {
    it("It's a string", () => {
      const answer = setOfNumbers('xablau');

      expect(answer).to.be.a('string');
    });

    it('Equals "Value must be a number"', () => {
      const answer = setOfNumbers('xablau');

      expect(answer).to.be.equals('The value must be a number')
    });
  });
});
