import React from 'react'

function Child1({setSelectedOption}) {
  return (
    <div className='child1'>
        <h1>Child Component 1</h1>
      <button onClick={(e) => setSelectedOption(e.target.textContent)}>Option 1</button>
    </div>
  )
}

export default Child1