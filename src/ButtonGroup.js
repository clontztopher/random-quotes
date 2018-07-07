import React from 'react'

const ButtonGroup = ({ next, prev, tweet }) => {
  return (
    <div className="quote-btns">
      <button type="button" className="btn btn-danger m-1" onClick={prev}>
        <i className="fas fa-angle-left" />
      </button>
      <button type="button" className="btn btn-info m-1" onClick={tweet}>
        <i className="fab fa-twitter" />
      </button>
      <button type="button" className="btn btn-danger m-1" onClick={next}>
        <i className="fas fa-angle-right" />
      </button>
    </div>
  )
}

export default ButtonGroup
