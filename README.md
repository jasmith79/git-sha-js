# git-sha-js
Read the current git revision from a directory with node.js

## Example use:

```javascript
const gitRev = require('git-sha');
const currentGitRev = await gitRev(__dirname);
```