import React from 'react'
import { render, screen } from '../testUtils'
import CRUDModal from '../../components/CRUDModal'


test('renders app', () => {
  render(<CRUDModal />, {
    initialState: {
      todos: [],
      todoSelected: {},
      originalTodos: []
    }
  })
  expect(screen.getByText(/Title [(]Required[)]/i)).toBeInTheDocument()
});
