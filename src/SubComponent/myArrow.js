import React from 'react'

export const myArrow=({ type, onClick, isEdge })=> {
    const pointer = type === consts.PREV ? <img src={arrowleft}/> : <img src={arrowright}/>
    return (
      <button onClick={onClick} disabled={isEdge}>
        {pointer}
      </button>
    )
  }
