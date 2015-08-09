import { START, SUCCESS, FAIL } from '../constants/request';

export function start () {
  return {
    type: START
  };
}

export function success () {
  return {
    type: SUCCESS
  };
}

export function fail (error) {
  return {
    type: FAIL,
    error
  };
}
