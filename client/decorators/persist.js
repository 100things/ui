import React from 'react';

const persist = (Component, storage, storageName, getData) => {
  return class Persist extends React.Component {
    constructor(props) {
      super(props);

      if(typeof addEventListener === 'function') {
        addEventListener('beforeunload', function() {
          storage.set(storageName, getData());
        }, false);
      }
    }

    render() {
      return <Component {...this.props} {...this.state} />;
    }
  };
};

export default (storage, storageName, getData) => {
  return (target) => persist(target, storage, storageName, getData);
};
