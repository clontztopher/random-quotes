import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Quote = ({ currentQuote, quoteReceived }) => {
  return (
    <CSSTransition
      in={quoteReceived}
      classNames="transition"
      timeout={400}
      unmountOnExit
    >
      {state => (
        <blockquote className="blockquote text-center">
          <p className="mb-0 text-primary">{currentQuote.quoteText || ''}</p>
          <footer className="blockquote-footer mt-2">
            <cite title="Source Title">{currentQuote.quoteAuthor}</cite>
          </footer>
        </blockquote>
      )}
    </CSSTransition>
  )
}

export default Quote
