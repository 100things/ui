import React from 'react/addons';
import { Route, DefaultRoute } from 'react-router';
import Layout from './components/layout';
import Browse from './pages/browse';
import Photo from './pages/photo';
import Thing from './pages/thing';

export default (
  <Route name='layout' path='/' handler={Layout}>
    <DefaultRoute name='browse' handler={Browse} />
    <Route name='camera' path='/camera' handler={Photo} />
    <Route name='thing' path='/thing' handler={Thing} />
  </Route>
);
