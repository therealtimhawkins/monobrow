import { Router, Scraper } from './index'
import browser from './mocks/browser.mock'
import { document } from './mocks/document.mock'

describe('index.ts', () => {
  it('should export the class Router', () => {
    const router = new Router(browser)
    expect(Object.keys(router)).toEqual(['browser', 'defaultOptions', 'route'])
  })

  it('should export the class Scraper', () => {
    const scraper = new Scraper(document)
    expect(Object.keys(scraper)).toEqual(['document'])
  })
})
