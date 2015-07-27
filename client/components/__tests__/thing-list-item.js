describe('Thing List Item', function () {

  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var shallowRenderer = TestUtils.createRenderer();
  var Component = require('../thing-list-item.jsx');

  describe('Render', function () {

    it('should render into the document', function () {
      shallowRenderer.render(React.createElement(Component, {
        name: 'Test Item',
        image: 'test/image.png'
      }));

      // TODO: Need a better way to test this.
      var result = JSON.stringify(shallowRenderer.getRenderOutput());

      expect(result).to.contain('"children":"Test Item"');
      expect(result).to.contain('"src":"test/image.png"');
    });
  });
});
