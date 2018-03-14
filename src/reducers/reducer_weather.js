import {FETCH_WEATHER} from '../actions/index';
//initial state CAN be null, but we need an array here
export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // can't just push() into the state object - that will mutate the state object
      // ...use concat instead to return a new VERSION of it.
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state];
  }
  return state;
}