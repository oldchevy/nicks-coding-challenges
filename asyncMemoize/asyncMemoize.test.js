const expect = require('chai').expect;
const sinon = require('sinon');
const asyncMemoize = require('./asyncMemoize');
const colors = require('colors');

function phonyAsyncFunc(value, callback) {
  setTimeout( () => callback(value.toUpperCase()), 1000);
}

const spyPhonyAsyncFunc = sinon.spy(phonyAsyncFunc);
const memoPhonyAsyncFunc = asyncMemoize(spyPhonyAsyncFunc);
const dogs = [];
const cats = [];
expect( spyPhonyAsyncFunc.callCount ).to.eql( 0 );

describe('Async Memoize - this is a fun one', () => {


  it('should properly call the memoized function and return the correct results', done => {

    memoPhonyAsyncFunc( 'dog', result => {
      dogs.push( 'First: ' + result );
      expect( dogs ).to.eql( ['First: DOG'] );
    });
    expect( spyPhonyAsyncFunc.callCount ).to.eql( 1 );

    memoPhonyAsyncFunc( 'dog', result => {
      dogs.push( 'Second: ' + result );
      expect( dogs ).to.eql( ['First: DOG', 'Second: DOG'] );
    });
    expect( spyPhonyAsyncFunc.callCount ).to.eql( 1 );

    memoPhonyAsyncFunc( 'cat', result => {
      cats.push( 'First: ' + result );
      expect( cats ).to.eql( ['First: CAT'] );
    });
    expect( spyPhonyAsyncFunc.callCount ).to.eql( 2 );

    memoPhonyAsyncFunc( 'cat', result => {
      cats.push( 'Second: ' + result );
      expect( cats ).to.eql( ['First: CAT', 'Second: CAT'] );
    });
    expect( spyPhonyAsyncFunc.callCount ).to.eql( 2 );

    memoPhonyAsyncFunc( 'dog', result => {
      dogs.push( 'Third: ' + result );
      expect( dogs ).to.eql( ['First: DOG', 'Second: DOG', 'Third: DOG'] );
      console.log( '\tAll dog tests passed.'.green );
    });
    expect( spyPhonyAsyncFunc.callCount ).to.eql( 2 );

    memoPhonyAsyncFunc( 'cat', result => {
      cats.push( 'Third: ' + result );
      expect( cats ).to.eql( ['First: CAT', 'Second: CAT', 'Third: CAT'] );
      console.log( '\tAll cat tests passed.'.green );
      done();
    });
    expect( spyPhonyAsyncFunc.callCount ).to.eql( 2 );

  });

});
