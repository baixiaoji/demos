import deepClone from '../deepclone_answer.js';

describe('deepClone unit testing', function() {
  it('should direct return it when pass the primary type', function() {
    const a = deepClone(1);
    const b = deepClone(false);
    const c = deepClone('test');
    const d = deepClone(undefined);
    const e = deepClone(null);
    const g = Symbol('g');
    const f = deepClone(g);

    expect(a).toBe(1);
    expect(b).toBe(false);
    expect(c).toBe('test');
    expect(d).toBe(undefined);
    expect(e).toBe(null);
    // Symbol 这样 看起来像引用类型
    // 凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。
    expect(f).toBe(g);

  });

  it('should copy the obj when pass the object with primary property', function() {
    const obj = {
      a: 1,
    }
    const copyOne = deepClone(obj);
    expect(copyOne.a).toBe(1);
    expect(obj !== copyOne).toBe(true);
    expect(obj).toEqual(copyOne);
  });

  it('should copy the obj without property in prototype', function() {
    const examplePrototype = {
      name: 'baiji',
    }
    const obj = Object.create(examplePrototype);
    const copyOne = deepClone(obj);

    expect('name' in copyOne).toBe(false);
  });

  it('should copy the obj when property is reference type', function() {
    const example = {
      person: {
        name: 'baiji'
      },
    }
    const copyOne = deepClone(example);

    expect(example).toEqual(example);

    expect(copyOne.person !== example.person).toBe(true);
  });

  it('should copy the array when pass arg is an array', function() {
    const example = [1,2];
    const copyOne = deepClone(example);

    expect(copyOne).toBeInstanceOf(Array);
    expect(copyOne).toEqual(example);
    expect(copyOne !== example).toBe(true);
  });

  it('should copy the Function when pass arg is an function', function() {
    const example = function () {return 1};
    const copyOne = deepClone(example);
    const result = copyOne();
    expect(result).toBe(1);
    expect(copyOne).toBeInstanceOf(Function);
    // expect(copyOne).toEqual(example);
    expect(example !== copyOne).toBe(true);
  });

  it('should copy the Date when pass arg is an Date', function() {
    const example = new Date();
    const copyOne = deepClone(example);

    expect(copyOne).toBeInstanceOf(Date);
    expect(copyOne).toEqual(example);
    expect(example !== copyOne).toBe(true);
  });

  it('should copy the RegExp when pass arg is an RegExp', function() {
    const example = /\d+/ig;
    const copyOne = deepClone(example);

    expect(copyOne).toBeInstanceOf(RegExp);
    expect(copyOne).toEqual(example);
    expect(example !== copyOne).toBe(true);
  });
});
