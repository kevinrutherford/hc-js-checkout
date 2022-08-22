const totalPriceOf = (items) => {
  let totalPrice = 0
  if (items.length > 0)
    totalPrice = totalPrice + 50
  if (items.length > 1)
    totalPrice = totalPrice + 30
  return totalPrice
}

describe('Back to the checkout', () => {
  describe('Total price', () => {
    it.each([
      [  0, []         ],
      [ 50, ['A']      ],
      [ 80, ['A', 'B'] ],
    ])('is %d for a basket containing %s', (expectedTotalPrice, items) => {
      expect(totalPriceOf(items)).toBe(expectedTotalPrice)
    })
  })
})

