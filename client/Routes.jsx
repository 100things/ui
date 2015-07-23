import React from 'react/addons';
import { Route, DefaultRoute } from 'react-router';
import Layout from './Components/Layout';
import Browse from './Pages/Browse';
import Photo from './Pages/Photo';

export default (
  <Route name='layout' path='/' handler={Layout}>
    <DefaultRoute name="browse" handler={Browse} />
    <Route name="photo" path="/camera" handler={Photo} />
  </Route>
);
