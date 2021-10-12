const myRemove = require('./ my_remove.js');

describe(' A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const expected = myRemove([1, 2, 3, 4], 3);
    const equal = [1, 2, 4];

    expect(expected).toEqual(equal);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const expected = myRemove([1, 2, 3, 4], 3);
    const equal = [1, 2, 3, 4];

    expect(expected).not.toEqual(equal);
  });

  it('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const expected = myRemove([1, 2, 3, 4], 5);
    const equal = [1, 2, 3, 4];

    expect(expected).toEqual(equal);
  });
});