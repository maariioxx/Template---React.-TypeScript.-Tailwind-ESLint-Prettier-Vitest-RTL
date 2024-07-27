import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'
import React from 'react'

it('true to be true', () => {
  expect(true).toBe(true)
})

it('App', () => {
  render(<App />)

  screen.debug()
})
