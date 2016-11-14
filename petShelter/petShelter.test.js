//Test suite for petShelter

//Test suite for findPivot
var expect = require('chai').expect;
var Shelter = require('./petShelter');

describe('Pet Shelter', function() {

  var shelter = new Shelter();
  shelter.enqueue('puffer', 'cat');
  shelter.enqueue('beats', 'dog');
  shelter.enqueue('blarghl', 'dog');
  shelter.enqueue('derp', 'cat');
  shelter.enqueue('sparkles', 'dog');
  shelter.enqueue('blinky', 'cat');

  it('should get the first pet regardless of type', function() {
    expect(shelter.dequeueAny()).to.equal('puffer');
  });

  it('should be able to dequeue a cat', function() {
    expect(shelter.dequeueCat()).to.equal('derp');
  });

  it('should get the first pet regardless of type', function() {
    expect(shelter.dequeueAny()).to.equal('beats');
  });

  it('should be able to dequeue just a dog', function() {
    expect(shelter.dequeueAny()).to.equal('blarghl');
  });

  it('should be able to handle no dogs in the shelter', function() {
    shelter.dequeueAny();
    expect(shelter.dequeueDog()).to.equal(null);
  });

  it('should be able to handle no cats in the shelter', function() {
    shelter.dequeueAny();
    expect(shelter.dequeueCat()).to.equal(null);
  });

  it('should be able to handle nothing in the shelter', function() {
    expect(shelter.dequeueAny()).to.equal(null);
  });

});