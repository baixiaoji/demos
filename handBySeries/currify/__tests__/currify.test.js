import currify from '../currify-answer.js';

describe('Testing currify function', function() {
  let addFn = null;
  beforeEach(() => {
    addFn = (a, b) => {
      return a + b;
    }
  })
  it('should return a fn when fn wrapper by currify', function() {
    const currifyAdd = currify(addFn);
    expect(currifyAdd).toBeInstanceOf(Function);
  });

  it('should return a fn when less args', function() {
    const currifyAdd = currify(addFn);
    const oneCurrify = currifyAdd(1);
    expect(oneCurrify).toBeInstanceOf(Function);
  });

  it('should call the fn when  arguments satisfy function need', function() {
    const mockAdd = jest.fn((a, b) => {
      return a + b;
    });
    const currifyAdd = currify(mockAdd);
    const result = currifyAdd(1)(2);

    expect(mockAdd).toBeCalled();
    expect(result).toBe(3);
  });

  it('should call the fn when pass rest arguments in same time', function() {
    const mockAdd = jest.fn((a, b, c) => {
      return a + b + c;
    });
    const currifyAdd = currify(mockAdd, [1]);
    const result = currifyAdd(2,3);
    expect(mockAdd).toBeCalled();
    expect(result).toBe(6);
  });

  afterEach(() => {
    addFn = null;
  })
});
