import hd from '../promise.answer.js';

describe(hd, function() {
  it('should be a function', function() {
    expect(hd).toBeInstanceOf(Function);
  });

  it('should exec the fn when pass the hd', function() {
    const fn = jest.fn();
    new hd(fn);

    expect(fn).toBeCalled();
  });

  it('should having the two fn', function() {
    const fn = jest.fn()
    const promise = new hd(fn);
    expect(fn.mock.calls[0].length).toBe(2);
  });

  it('should state and val change when call resolve ', function() {
    const promise = new hd((resolve, reject) => {
      resolve(4);
    });

    expect(promise.state).toBe('resolve');
    expect(promise.value).toBe(4);
  });
});
