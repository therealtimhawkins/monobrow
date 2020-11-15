import { Browser } from 'webextension-polyfill-ts'
import { Router } from './router.types'
class Router {
  browser: Browser
  route: string

  constructor(browser: Browser, route: string = '') {
    this.browser = browser
    this.route = route
  }

  sendAll(route: string, body: object) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await this.browser.runtime.sendMessage({
          route,
          body
        })
        resolve(response)
      } catch (err) {
        reject(err)
      }
    })
  }

  send(route: string, body: object) {
    return new Promise(async (resolve, reject) => {
      try {
        const tabs = await this.browser.tabs.query({
          active: true,
          currentWindow: true
        })
        if (tabs[0].id) {
          const response = await this.browser.tabs.sendMessage(tabs[0].id, {
            route,
            body
          })
          resolve(response)
        }
        reject()
      } catch (err) {
        reject(err)
      }
    })
  }

  receive(route: string, callback: Function) {
    return this.browser.runtime.onMessage.addListener(
      (message: Router.Data) => {
        if (this.route + route === message.route) {
          return Promise.resolve(callback(message.body))
        }
        if (route === '/monobrow-logger') {
          callback(message.body)
        }
      }
    )
  }

  logInit() {
    this.receive('/monobrow-logger', (log: object) => {
      if (log) console.log(log)
    })
  }

  log(log: string | object) {
    if (typeof log === 'string') log = { log }
    this.sendAll('/monobrow-logger', log)
  }
}

export default Router
