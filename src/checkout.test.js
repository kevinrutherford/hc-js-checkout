const totalPriceOf = (items, priceOfA, priceOfB) => {
  let totalPrice = 0
  if (items.length > 0)
    totalPrice = totalPrice + priceOfA
  if (items.length > 1)
    totalPrice = totalPrice + priceOfB
  return totalPrice
}

describe('Back to the checkout', () => {
  describe('Total price', () => {
    it.each([
      [  0, []         ],
      [ 50, ['A']      ],
      [ 80, ['A', 'B'] ],
    ])('is %d for a basket containing %s', (expectedTotalPrice, items) => {
      expect(totalPriceOf(items, 50, 30)).toBe(expectedTotalPrice)
    })
  })
})

