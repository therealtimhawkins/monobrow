export declare namespace Scraper {
  interface Element {
    id?: string
    tag?: string
    className?: string
  }

  interface Elements {
    [key: string]: string
  }

  interface ListItem {
    innerHTML: string
  }
}
