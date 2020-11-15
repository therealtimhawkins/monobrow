import { Browser } from 'webextension-polyfill-ts'

class Content {
  document: Document
  browser: Browser

  constructor(document: Document, browser: Browser) {
    this.document = document
    this.browser = browser
  }

  executeScript(filePath: string) {
    this.browser.tabs.executeScript({
      file: filePath,
      allFrames: true
    })
  }

  injectScriptTag(url: string) {
    const script = this.document.createElement('script')
    script.setAttribute('src', url)
    this.document.head.appendChild(script)
  }

  inject(html: string) {
    const container = this.document.createElement('div')
    container.innerHTML = html
    this.document.body.appendChild(container)
  }
}

export default Content
