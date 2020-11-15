import { Scraper } from './scraper.types'
class Scraper {
  document: Document

  constructor(document: Document) {
    this.document = document
  }

  get(element: Scraper.Element) {
    if (element.tag) return this.getByTag(element.tag)
    if (element.id) return this.getById(element.id)
    return []
  }

  getByTag(tag: string) {
    return this.document.getElementsByTagName(tag)
  }

  getById(id: string) {
    return this.document.getElementById(id)
  }
}

export default Scraper
