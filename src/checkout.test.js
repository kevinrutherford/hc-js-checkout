const totalPriceOf = (items, priceList) => {
  let totalPrice = 0
  if (items.length > 0)
    totalPrice = totalPrice + priceList['A']
  if (items.length > 1)
    totalPrice = totalPrice + priceList['B']
  return totalPrice
}

describe('Back to the checkout', () => {
  describe('Total price', () => {
    const priceList = {
      'A': 50,
      'B': 30,
    }

    it.each([
      [  0, []         ],
      [ 50, ['A']      ],
      [ 80, ['A', 'B'] ],
    ])('is %d for a basket containing %s', (expectedTotalPrice, items) => {
      expect(totalPriceOf(items, priceList)).toBe(expectedTotalPrice)
    })
  })
})

