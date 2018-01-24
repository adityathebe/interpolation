# Interpolation

#### A simple library for Interpolation

## Available Methods

- [x] Newton's Forward
- [x] Newton's Backward
- [ ] Gauss's Forward
- [ ] Gauss's Backward
- [ ] Stirling's Method
- [ ] Everett's Method

## Example

```js
let x = [3, 4, 5, 6, 7, 8, 9];
let fx = [13, 21, 31, 43, 57, 73, 91];
let nf = new Interpolation(x, fx);
let result = nf.newtonForward(1);
console.log(result.toFixed(3)); // 3.000

```

## License

#### MIT