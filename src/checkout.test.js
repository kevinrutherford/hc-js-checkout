const totalPriceOf = (itemsScanned) => {
  let currentPrice = 0
  currentPrice = itemsScanned.length > 0
    ? currentPrice + 50
    : currentPrice
  return currentPrice
}

describe('Back to the checkout', () => {
  describe('Total price', () => {
    it.each([
      [  0, []    ],
      [ 50, ['A'] ],
    ])('is %d for a basket containing %s', (expectedTotalPrice, items) => {
      expect(totalPriceOf(items)).toBe(expectedTotalPrice)
    })
  })
})

