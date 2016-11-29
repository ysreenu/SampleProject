describe("Check the hello world", function() {
   it("HEllo World", function() {
      expect(myapp).toBeDefined();
      expect(angular.getVersion()).toBeTruthy();
      expect(angular.getVersion().major).toEqual(2); 
     })