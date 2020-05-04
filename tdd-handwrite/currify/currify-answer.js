// export default function currify(fn, params=[]) {
//   let len = fn.length;
//   return function(...rest) {
//     if (rest.length + params.length !== len) {
//       return currify(fn, params.concat(rest));
//     } else {
//       return fn(...params, ...rest);
//     }
//   }
// }

// tricks version
const currify = (
  fn,
  params = []
) => (
  ...rest
) => (
  allParams => allParams.length === fn.length ? fn(...allParams) : currify(fn, allParams)
)(params.concat(rest))
export default currify;
