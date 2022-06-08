(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.rollupBanner', function() {
      const res = nx.rollupBanner();
      console.log(res);
      expect(typeof res).toBe('string');
    });
  });
})();
