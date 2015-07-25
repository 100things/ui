import Router from 'react-router';
import routes from './Routes';

export default Router.create({
  routes: routes,
  location: Router.HistoryLocation
});
