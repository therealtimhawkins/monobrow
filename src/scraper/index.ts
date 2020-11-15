import { Scraper } from './scraper.types'

  interface Elements {
    [key: string]: string
  }

  interface Element {
    innerText?: string
  }

  interface ListItem {
    innerHTML: string
  }
class Scraper {
  document: Document

  constructor(document: Document) {
    this.document = document
  }

  get(element: Scraper.Element) {
    if (element.tag) return this.getByTag(element.tag)
    if (element.id) return this.getById(element.id)
    if (element.className) return this.getByClass(element.className)
    return []
  }

  getByTag(tag: string) {
    return this.document.getElementsByTagName(tag)
  }

  getById(id: string) {
    return this.document.getElementById(id)
  }

  getByClass(className: string) {
    return this.document.getElementsByClassName(className)
  }

  getInnerHtmlData(html: string, elements: Elements) {
    const dom = new DOMParser().parseFromString(html, 'text/html')
    const response: Elements = {}
    Object.keys(elements).forEach(key => {
      const element = dom.getElementsByClassName(elements[key])[0]
      response[key] = (<HTMLElement>element).innerText
    })
    return response
  }

  getListData(list: Array<ListItem>, elements: Elements) {
    const parsedList: Array<Elements> = []
    list.forEach(listItem => {
      const html = listItem.innerHTML
      const data = this.getInnerHtmlData(html, elements)
      parsedList.push(data)
    })
    return parsedList
  }
}

export default Scraper
