const totalPriceOf = (items, prices) => {
  let totalPrice = 0
  if (items.length > 0)
    totalPrice = totalPrice + prices.priceOfA
  if (items.length > 1)
    totalPrice = totalPrice + prices.priceOfB
  return totalPrice
}

describe('Back to the checkout', () => {
  describe('Total price', () => {
    const prices = {
      priceOfA: 50,
      priceOfB: 30,
    }

    it.each([
      [  0, []         ],
      [ 50, ['A']      ],
      [ 80, ['A', 'B'] ],
    ])('is %d for a basket containing %s', (expectedTotalPrice, items) => {
      expect(totalPriceOf(items, prices)).toBe(expectedTotalPrice)
    })
  })
})

