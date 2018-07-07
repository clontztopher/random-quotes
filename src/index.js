import React from 'react'
import ReactDOM from 'react-dom'
import QuoteGenerator from './QuoteGenerator'
import App from './App'

import './styles.css'

const quoteGenerator = new QuoteGenerator()

ReactDOM.render(
  <App quoteGen={quoteGenerator} />,
  document.getElementById('root')
)
