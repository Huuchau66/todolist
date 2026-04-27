import React from 'react'

function Inputbox({handleSubmit,newtast,handleInputchange}) {
  return (
    <div>
        <form onSubmit={handleSubmit} action="#" className="form">
          <label htmlFor="them-congviec">Them cong viec</label>
          <input type="text" id="them-congviec" value={newtast} onChange={handleInputchange}  />
          <button type="submit">Them</button>
        </form>
      </div>
  )
}

export default Inputbox
