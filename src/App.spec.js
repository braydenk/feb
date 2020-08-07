import React from 'react'
import { render } from 'react-testing-library'
import App from './App'
import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'

describe('App', () => {
  it('Renders without error', () => {
    render(<App />)
  })
})
