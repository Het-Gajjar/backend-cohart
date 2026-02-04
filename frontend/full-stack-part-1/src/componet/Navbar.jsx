import React, { useState } from 'react'
import Addnote from './Addnote';

const Navbar = ({toggleAddNote}) => {
    
    const [showAddNote, setShowAddNote] = useState(false);
  return (
    <div className='nav'>
        <h2>notes</h2>
       <button
        className="addbtn"
        onClick={toggleAddNote}
      >
        {showAddNote ? "Close" : "Add Note"}
        
      </button>
      
    </div>
  )
}

export default Navbar