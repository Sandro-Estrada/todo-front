import '@testing-library/jest-dom'
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { todosReducer } from '../redux/reducers/todosReducer'
import { generalReducer } from "../redux/reducers/generalReducer"

const rootReducer = combineReducers({
    todos: todosReducer,
    general: generalReducer
})

const thunk = ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState)
    }
  
    return next(action)
}

const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()
  
    const invoke = action => thunk(store)(next)(action)
  
    return { store, next, invoke }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function render(
  ui,
  {
    initialState,
    ...renderOptions
  } = {}
) {
    create()
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }