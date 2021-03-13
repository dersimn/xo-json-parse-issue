`package.json`
```javascript
{
  "name": "xo-json-parse-issue",
  "version": "0.0.0",
  "main": "index.js",
  "type": "module",
  "private": true,
  "devDependencies": {
    "xo": "^0.38.2"
  }
}
```

`index.js`
```javascript
#!/usr/bin/env node

import fs from 'fs';
const pkg = JSON.parse(await fs.promises.readFile(new URL('./package.json', import.meta.url)));

console.log('Package name is:', pkg.name);
```

Output:
```
% npx xo

  index.js:4:24
  ✖  4:24  Parsing error: Cannot use keyword await outside an async function

  1 error
```

However according to [Node.js Documentation](https://nodejs.org/api/esm.html#esm_no_json_module_loading) this code is perfectly fine and works:
```
% node index
Package name is: xo-json-parse-issue
```
