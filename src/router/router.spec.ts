import Router from './'
import browser from '../mocks/browser.mock'

describe('Router', () => {
  it('should export the class Router', () => {
    const router = new Router(browser)
    expect(Object.keys(router)).toEqual(['browser', 'defaultOptions', 'route'])
  })

  describe('Router.send()', () => {
    it('should send a message to the current tab', () => {
      const router = new Router(browser)
      router.send('/', {message: 'testBody'})
    })
  })
})
