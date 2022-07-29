const checkout = (itemsScanned) => {
  let currentPrice = 0
  currentPrice = itemsScanned.length > 0
    ? currentPrice + 50
    : currentPrice
  return currentPrice
}

describe('Back to the checkout', () => {
  describe('Total price', () => {
    it('is zero before any items are scanned', () => {
      let totalPrice = checkout([])
      expect(totalPrice).toBe(0)
    })

    it('is 50 for a basket containing an A', () => {
      let totalPrice = checkout(['A'])
      expect(totalPrice).toBe(50)
    })
  })
})

