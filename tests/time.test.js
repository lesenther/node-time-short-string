const assert = require('assert');
const timeRelative = require('../');

describe('Test times in the past', _ => {
  it('should test 1 seconds ago', done => {
    const result = timeRelative(1);
    assert.strictEqual(result, '1s ago');
    done();
  });

  it('should test 61 seconds ago', done => {
    const result = timeRelative(61);
    assert.strictEqual(result, '1m 1s ago');
    done();
  });
});

describe('Test the present', _ => {
  it('should test now', done => {
    const result = timeRelative(0);
    assert.strictEqual(result, 'now');
    done();
  });
});

describe('Test times in the future', _ => {
  it('should test test 1 second from now', done => {
    const result = timeRelative(-1);
    assert.strictEqual(result, '1s from now');
    done();
  });

  it('should test test 61 second from now', done => {
    const result = timeRelative(-61);
    assert.strictEqual(result, '1m 1s from now');
    done();
  });
});

describe('Test config settings', _ => {
  it('should test suffix past', done => {
    const result = timeRelative(1, { suffix: false });
    assert.strictEqual(result, '1s');
    done();
  });

  it('should test suffix present', done => {
    const result = timeRelative(0, { suffix: false });
    assert.strictEqual(result, '');
    done();
  });

  it('should test suffix future', done => {
    const result = timeRelative(1, { suffix: false });
    assert.strictEqual(result, '1s');
    done();
  });
});
