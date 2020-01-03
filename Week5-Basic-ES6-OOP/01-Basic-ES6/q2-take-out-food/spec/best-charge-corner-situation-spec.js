describe('Take out food', function () {

  it('should indicate "您没有选择菜品" when no food is choosed', function() {
    let inputs = [];
    let summary = bestCharge(inputs).trim();
    let expected = `您没有选择菜品`.trim();
    expect(summary).toEqual(expected);
  });

});