import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { Object } from 'core-js';

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
}


export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK'
}

// Reducers
export const reducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign(
          {},
          state,
          { lastUpdate: action.ts,
            light: !!action.light }
        )
    case actionTypes.ADD:
        return Object.assign(
          {},
          state,
          { count: state.count + 1}
        )
    default:
      return state
  }
}

// Actions

export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({type: actionTypes.TICK, light: !isServer, ts: Date.now()})
}

export const startClock = () => dispatch => {
  return setInterval(() => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }), 1000)
}

export const addCount = () => dispatch => {
  return dispatch({ type: actionTypes.ADD })
}

export const initStore = (initialState = exampleInitialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}