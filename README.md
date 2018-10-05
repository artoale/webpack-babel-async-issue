This repo is for demonstrating a potential bug in how optimised webpack
doesn't handle async functions properly

# The problem

When building in "production" mode the async function returning an immediate
is transformed like this:

```javascript
{
    key: "value"
}.then(e => console.log(e))
```

While it should be compiled to something like this:

```javascript
Promise.resolve({
    key: "value"
}).then(e => console.log(e))
```

# Reproducing the error

Install deps via `npm i`

Run `npm dev` to see how the app behaves in development mode

Run `npm prod` and enjoy the breaking

