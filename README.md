# TeamCowboy JS

A TypeScript first TeamCowboy API client

## Installation

```bash
$ npm i --save teamcowboy.js
$ # or with yarn:
$ yarn add teamcowboy.js
```

## Usage

In order to access and make calls against the Team Cowboy API, you must have a valid API Account for your application.

Go [here](https://www.teamcowboy.com/api/requestAccount) to request access.

### Unauthenticated Requests
Provide the private and public api keys to make requests.

**NOTE**: Only the following methods can be called without authenticating:

* `Auth.getUserToken`
* `Test.getRequest`
* `Test.postRequest`

```ts
const { TeamCowboy } = require("teamcowboy.js");

const tc = new TeamCowboy({
  privateApiKey: process.env.TC_PRIV_KEY,
  publicApiKey: process.env.TC_PUB_KEY
});
```

### Authenicated Requests 

Once authenticated, you can provide the user's auth token:


```ts
const { TeamCowboy } = require("teamcowboy.js");

const tc = new TeamCowboy({
  privateApiKey: process.env.TC_PRIV_KEY,
  publicApiKey: process.env.TC_PUB_KEY,
  authToken: process.env.TC_AUTH_TOKEN
});
```

Then you can start calling various methods:

```ts
const { TeamCowboy } = require("teamcowboy.js");

const tc = new TeamCowboy({
  privateApiKey: process.env.TC_PRIV_KEY,
  publicApiKey: process.env.TC_PUB_KEY,
  authToken: process.env.TC_AUTH_TOKEN
});

tc.User.get()
  .then((r) => console.log(JSON.stringify(r, null, 2)))
  .catch(console.error);
```
