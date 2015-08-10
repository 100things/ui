import React from 'react/addons';
import { Route, DefaultRoute } from 'react-router';
import Layout from './components/layout';
import Browse from './pages/browse';
import Photo from './pages/photo';
import CreateThing from './pages/create-thing';

export default (
  <Route name='root' path='/' handler={Layout}>
    <DefaultRoute handler={Browse} />
    <Route name='camera' path='/camera' handler={Photo} />
    <Route name='thing' path='/thing' handler={CreateThing} />
  </Route>
);
