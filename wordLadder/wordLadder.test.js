var expect = require('chai').expect;
var wordLadder = require('./wordLadder');

describe('Word Ladder', function() {

  var dict = {
    hot: true,
    dot: true,
    dog: true,
    lot: true,
    log: true
  };

  describe('Should be able to find a path between hit and cog', function() {
    expect(wordLadder('hit', 'cog', dict)).to.equal(5);
  });

  describe('Should be able to find the shortest path between hit and cog', function() {
    dict['hog'] = true;
    expect(wordLadder('hit', 'cog', dict)).to.equal(4);
  });

  describe('Should give an appropriate message when no path exists', function() {
    var message = 'No path from hit to cox';
    expect(wordLadder('hit', 'cox', dict)).to.equal(message);
  });

  describe('Should not get stuck in an infinite loop', function() {
    dict['hat'] = true;
    expect(wordLadder('hit', 'cog', dict)).to.equal(4);
  });

});