import { JSDOM } from 'jsdom'
const dom = new JSDOM()
const document = dom.window.document
const window = dom.window
export { document, window }
