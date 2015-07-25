import AltIso from 'alt/utils/AltIso';
import Flux from './flux';
import router from './router';

const flux = new Flux();

router.run((Handler, route) => {
  AltIso.render(flux, Handler, {
    route: route,
    flux: flux
  });
});
