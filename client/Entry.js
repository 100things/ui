import Router from 'react-router';
import Routes from './Routes';
import AltIso from 'alt/utils/AltIso';
import Flux from './alt';

const flux = new Flux();

Router.run(Routes, Router.HistoryLocation, (Handler) => {
    AltIso.render(flux, Handler, {
      flux: flux
    });
});
