import React from 'react/addons';
import { Route, DefaultRoute } from 'react-router';
import Layout from './Components/Layout';
import Browse from './Pages/Browse';

export default class Routes extends React.Component {
  render () {
    return (
      <Route path='/' component={Layout}>
        <DefaultRoute name="browse" handler={Browse} />
      </Route>
    );
  }
}
