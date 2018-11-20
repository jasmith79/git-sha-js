/*
 * tests.spec.js
 *
 * @author jasmith79 __at__ gmail
 * @copyright 2018
 * @license MIT
 */

const gitRev = require('../index.js');

describe('gitHash', () => {
  it('should return a git sha', done => {
    gitRev('./')
      .then(sha => {
        expect(sha.match(/^[0-9a-f]+$/)).not.toBeNull();
        done();
      })
      .catch(err => {
        console.error(err);
        done.fail(err);
      });
  });
});
