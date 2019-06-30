
## npm

`npm i --save`   installs & inserts package info into package.json


## package.json

### local modules
 
`npm i --save ./path_to_my/custom_module`

```js
{
 “name”: “my-app”,
 “dependencies”: {
   “lodash”: “^2.0.0”,
   “my-module”: “file:local_modules/my-module”,
 }
}
```
[source](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc)
