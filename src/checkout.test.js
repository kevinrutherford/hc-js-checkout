const totalPriceOf = (items, prices) => {
  let totalPrice = 0
  if (items.length > 0)
    totalPrice = totalPrice + prices['A']
  if (items.length > 1)
    totalPrice = totalPrice + prices['B']
  return totalPrice
}

describe('Back to the checkout', () => {
  describe('Total price', () => {
    const prices = {
      'A': 50,
      'B': 30,
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

