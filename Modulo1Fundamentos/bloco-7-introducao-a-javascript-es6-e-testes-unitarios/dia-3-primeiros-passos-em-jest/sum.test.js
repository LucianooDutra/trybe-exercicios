const { describe, it, expect } = require("@jest/globals");
const { sum, myRemove, myFizzBuzz } = require("./sum.js");

describe("Item 1", () => {
  test("Teste se o retorno de sum(4, 5) é 9", () => {
    expect(sum(4, 5)).toBe(9);
  });

  test("Teste se o retorno de sum(0, 0) é 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test(`Teste se a função sum lança um erro quando os parâmetros são 4 e "5"`, () => {
    expect(() => sum(4, "5")).toThrowError();
  });

  test(`Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")`, () => {
    expect(() => sum(4, "5")).toThrowError("parameters must be numbers");
  });
});

describe("Item 2", () => {
  test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  test("Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]", () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  test("Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado", () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
