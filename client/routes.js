import React from 'react/addons';
import { Route, DefaultRoute } from 'react-router';
import Layout from './components/layout';
import Browse from './pages/browse';
import Photo from './pages/photo';

export default (
  <Route name='layout' path='/' handler={Layout}>
    <DefaultRoute name="browse" handler={Browse} />
    <Route name="photo" path="/camera" handler={Photo} />
  </Route>
);
