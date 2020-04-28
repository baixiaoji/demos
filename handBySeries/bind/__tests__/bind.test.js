import bind from '../bind_answer.js';

describe('Testing bind function', function() {
  it('should throw err when did not invoke by a function', function() {
    expect(() => {
      bind.call({})
    }).toThrow();
  });
  it('should return a function when using it', function() {
    const fn = function(){};
    expect(fn.bind2(null)).toBeInstanceOf(Function);
  });

  it('should call with the params when fn was bind before', function() {
    const mockFn = ()=>{};
    // why mock the apply fn because in implement we use the apply fn
    // https://stackoverflow.com/questions/48427099/how-do-i-test-call-and-apply-functions-in-jest
    mockFn.apply = jest.fn();
    const obj = {}
    const boundFn = bind.call(mockFn, obj);
    boundFn();
    expect(mockFn.apply).toBeCalledWith(obj, []);
  });

  it('should return the a result when fn invoke', function() {
    const fn = () => 1;
    expect(fn.bind2(null)()).toBe(1);
  });

  it('should support new keyword when bind fn', function() {
    const fn = function() {}
    const boundFn = fn.bind2(null);
    const obj = new boundFn();

    expect(obj).toBeInstanceOf(fn);
  });
});
