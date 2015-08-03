export default (target) => {
  target.prototype.onChangeOf = function (attr, event) {
    var state = {};
    state[attr] = event.currentTarget.value;
    this.setState(state);
  };

  return target;
};
