import debounce from '../debounce_answer.js';

jest.useFakeTimers();

describe(debounce, function() {
  it('should return the function when init debounce fn', function() {
    const fn = jest.fn();

    const debounceOne = debounce(fn, 100);

    expect(debounceOne).toBeInstanceOf(Function);
  });

  it('should invoke the arg fn when time after 100 ms', function() {
    const fn = () => {};
    fn.apply = jest.fn();

    const debounceOne = debounce(fn, 100);

    debounceOne();

    jest.runAllTimers();

    expect(fn.apply).toBeCalled();
  });

  it('should invoke once when call three time immediately', function() {
    const fn = jest.fn();

    const debounceOne = debounce(fn, 100);

    debounceOne();
    debounceOne();
    debounceOne();

    jest.runAllTimers();

    expect(fn).toBeCalledTimes(1);
  });

  it('should invoke fn with arguments when pass arg into debounce Fn', function() {
    const fn = () => {};
    fn.apply = jest.fn();

    const debounceOne = debounce(fn, 100);
    const self = {};
    const args = [12,1];
    debounceOne.call(self, args);

    jest.runAllTimers();

    expect(fn.apply).toBeCalled()

    expect(fn.apply.mock.calls[0][0]).toEqual(self);
    expect(fn.apply.mock.calls[0][1][0]).toEqual(args);

  });
});
