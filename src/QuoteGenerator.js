import axios from 'axios'

export default class QuoteGenerator {
  constructor() {
    this.quotes = []
    this.currIndex = -1
    this.tries = 4
    this.next = this.next.bind(this)
  }

  async next() {
    var nextQuote
    let len = this.quotes.length
    if (len > 0 && len - 1 > this.currIndex) {
      nextQuote = this.quotes[++this.currIndex]
    } else {
      try {
        nextQuote = await this.fetchQuote()
        if (this.quotes.every(quote => quote.id !== nextQuote.id)) {
          this.quotes = this.quotes.concat(nextQuote)
          this.currIndex++
        } else {
          if (--this.tries > 0) {
            setTimeout(() => {
              this.next()
            }, 1000)
          }
        }
      } catch (err) {
        console.warn(err.message)
        return false
      }
    }
    return nextQuote
  }

  async previous() {
    if (this.currIndex > 0) {
      return this.quotes[--this.currIndex]
    }
    return false
  }

  async fetchQuote() {
    let uri = 'https://safe-garden-90262.herokuapp.com/api/quote'
    const quoteData = await axios.get(uri)
    return quoteData.data
  }
}
