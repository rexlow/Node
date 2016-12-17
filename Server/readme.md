#Node server in ES6

##Let's install some presets

```
npm install --save-dev babel-cli
npm install --save-dev babel-preset-es2015 babel-preset-stage-2
```



##Add npm start script in pakage.json
though its all comes down to personal preference 

```
  "scripts": {
+   "start": "babel-node index.js --presets es2015,stage-2"
  }
