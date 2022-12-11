import React from 'react'

function Person({person}) {
  return (
    <div>
        <h4>{person.name} is {person.age} old, he is {person.role}</h4>
    </div>
  )
}

export default Person