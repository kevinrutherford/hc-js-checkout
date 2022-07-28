describe('Back to the checkout', () => {
  describe('Total price', () => {
    it('is zero before any items are scanned', () => {
      let currentPrice = 0
      const itemsScanned = []
      currentPrice = itemsScanned.length > 0
        ? currentPrice + 50
        : currentPrice
      expect(currentPrice).toBe(0)
    })

    it('is 50 for a basket containing an A', () => {
      let currentPrice = 0
      const itemsScanned = ['A']
      currentPrice = itemsScanned.length > 0
        ? currentPrice + 50
        : currentPrice
      expect(currentPrice).toBe(50)
    })
  })
})

