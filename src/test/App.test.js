import React from 'react'
import { render, screen } from './testUtils'
import App from '../App'


test('renders app', () => {
  render(<App />, {
    initialState: {
      todos: [],
      todoSelected: {},
      originalTodos: []
    }
  })
  expect(screen.getByText(/My Tasks/i)).toBeInTheDocument()
});
