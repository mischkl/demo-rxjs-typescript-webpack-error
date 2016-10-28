# demo-rxjs-typescript-webpack-error
Demo project demonstrating `ts-loader` issues when mixing JavaScript and TypeScript code while attempting to use "all-in-one" JavaScript/TypeScript-typings packages, specifically `rxjs@5`.

## Usage:

```bash
git clone https://github.com/mischkl/demo-rxjs-typescript-webpack-error.git
npm i
```

### To test with `ts-loader`:
```bash
npm run ts
```

This should result in a bunch of errors.

### To test with `awesome-typescript-loader`:
```bash
npm run awesome
```

This should work fine.