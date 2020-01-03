describe('Middle process - getSum', function () {

  it("should generate the sum price without discount", function() {
    let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    let summary = getSum(inputs);
    let expected = 38;
    expect(summary).toEqual(expected);
  });

});

describe('Middle process - getFoodDetail', function () {

  it("should generate all the food detail without discount", function() {
    let inputs = ["ITEM0001 x 1", "ITEM0013 x 2", "ITEM0022 x 1"];
    let summary = getFoodDetail(inputs);
    let expected = `黄焖鸡 x 1 = 18元
肉夹馍 x 2 = 12元
凉皮 x 1 = 8元`;
    expect(summary).toEqual(expected);
  });

});

describe('Middle process - calcute the discount for planB', function () {

  it("should generate selected food in discount", function() {
    let inputs = ["ITEM0001 x 1", "ITEM0013 x 2"];
    let summary = getDiscountFood(inputs);
    let expected = [ 'ITEM0001 x 1' ];
    expect(summary).toEqual(expected);
  });

  it("should generate food name in discount", function() {
    let inputs = ["ITEM0001 x 1", "ITEM0022 x 1"];
    let summary = getDiscountNameB(inputs);
    let expected = `黄焖鸡，凉皮`;
    expect(summary).toEqual(expected);
  });

  it("should calculate discount price in PlanB", function() {
    let inputs = ["ITEM0001 x 1", "ITEM0022 x 1"];
    let summary = getDiscountB(inputs);
    let expected = 13;
    expect(summary).toEqual(expected);
  });
});