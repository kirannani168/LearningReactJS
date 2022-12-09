import React from 'react'

export default function EventHandling () {
    function onClickHandler(){
        alert("Btn Clicked")
    }
  return (
    <div>
    <h3>Event Handling</h3>
        <button onClick={onClickHandler}>Click</button>&nbsp;
        <button onClick={()=>onClickHandler()}>Click2</button>
    </div>
  )
}
