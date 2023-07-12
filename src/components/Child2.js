import React from 'react'

function Child2({setSelectedOption}) {
    return (
      <div className='child2'>
          <h3>Child Component 2</h3>
        <button onClick={(e) => setSelectedOption(e.target.textContent)}>Option 2</button>
      </div>
    )
  }
  
export default Child2