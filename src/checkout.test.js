describe('Back to the checkout', () => {
  describe('Total price', () => {
    it('is zero before any items are scanned', () => {
      const price = 0
      expect(price).toBe(0)
    })

    it('is 50 for a basket containing an A', () => {
      expect(price).toBe(50)
    })
  })
})

