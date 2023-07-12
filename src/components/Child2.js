import React from 'react'

function Child2({setSelectedOption}) {
    return (
      <div className='child2'>
        <button onClick={(e) => setSelectedOption(e.target.textContent)}>Option 2</button>
      </div>
    )
  }
  
export default Child2