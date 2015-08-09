import { UPDATE } from '../constants/things';
import { start, success, fail } from './request';
import api from '../api/things';

export function update (things) {
  return {
    type: UPDATE,
    things
  };
}

async function handleAsync (action, dispatch) {
  try {
    dispatch(start());
    const { data } = await action();
    dispatch(success());
    dispatch(update(data));
  } catch (error) {
    dispatch(fail(error));
  }
}


export function readAll () {
  return handleAsync.bind(null, api.read);
}

export function read (id) {
  return handleAsync.bind(api.read.bind(null, id));
}

export function create (thing) {
  return handleAsync.bind(api.create.bind(null, thing));
}

export function update (thing) {
  return handleAsync.bind(api.update.bind(null, thing));
}

export function del (thing) {
  return handleAsync.bind(api.del.bind(null, thing));
}
