/* eslint-disable testing-library/no-debugging-utils */
import { render } from '@testing-library/react'
import App from './App'

describe('Name of the group', () => {
  it('should', () => {
    const { debug } = render(<App />)
    debug()
  })
})
