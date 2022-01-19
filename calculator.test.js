function mathsOperations(arrayNums) {
  let sumNum = parseFloat(arrayNums[0] + arrayNums[1], 10);

  let restNum = parseFloat(arrayNums[0] - arrayNums[1], 10);

  let multiplyNum = parseFloat(arrayNums[0] * arrayNums[1], 10);

  let divideNum = parseFloat(arrayNums[0] / arrayNums[1], 10);
  if (!Number.isInteger(sumNum)) {
    sumNum = parseFloat(sumNum.toFixed(3));
  }
  if (!Number.isInteger(restNum)) {
    restNum = parseFloat(restNum.toFixed(3));
  }
  if (!Number.isInteger(multiplyNum)) {
    multiplyNum = parseFloat(multiplyNum.toFixed(3));
  }
  if (!Number.isInteger(divideNum)) {
    divideNum = parseFloat(divideNum.toFixed(3));
  }

  return [sumNum, restNum, multiplyNum, divideNum];
}

describe("Given a mathsOperation function", () => {
  describe("When it receives an array of numbers [1,1]", () => {
    test("Then it should return [2,0,1,1]", () => {
      const array = [1, 1];

      const resultMathsOperations = mathsOperations(array);

      const expectedResult = [2, 0, 1, 1];

      expect(resultMathsOperations).toStrictEqual(expectedResult);
    });
  });
  describe("When it receives an array of numbers [50,16]", () => {
    test("Then it should return [66,34,800,3.125]", () => {
      const array = [50, 16];

      const resultMathsOperations = mathsOperations(array);

      const expectedResult = [66, 34, 800, 3.125];

      expect(resultMathsOperations).toStrictEqual(expectedResult);
    });
  });
  describe("When it receives an array of numbers [2.5,3.8]", () => {
    test("Then it should return [66,34,800,3.125]", () => {
      const array = [2.5, 3.8];

      const resultMathsOperations = mathsOperations(array);

      const expectedResult = [6.3, -1.3, 9.5, 0.658];

      expect(resultMathsOperations).toStrictEqual(expectedResult);
    });
  });
});
