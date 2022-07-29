const totalPriceOf = (items) => {
  let totalPrice = 0
  if (items.length > 0)
    totalPrice = totalPrice + 50
  return totalPrice
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

