/*
 * git-sha-js
 *
 * @author jasmith79 __at__ gmail
 * @copyright 2018
 * @license MIT
 *
 * Returns the current git revision of the passed-in directory or an error for ENOENT, etc.
 */

const {exec} = require('child_process');
module.exports = dir => {
  return new Promise((res, rej) => {
    exec(`git --git-dir ${dir}/.git rev-parse HEAD`, (err, stdOut, stdErr) => {
      if (err) rej(err);
      if (stdErr) rej(new Error(stdErr.trim()));
      res(stdOut.trim());
    });
  });
};
