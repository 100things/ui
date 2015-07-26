import Router from 'react-router';
import routes from './Routes';

const router = Router.create({
  routes: routes,
  location: Router.HistoryLocation
});

export default router;
