import React from 'react'

function List({list,showcomplete,setListStatus,removeList,setShowcomplete}) {
  return (
    <>
    <ul className="danh-sach">
        {list
        .filter((list)=>(showcomplete ? list.status !==1 : true ))
        .map(list =>(
            <li key={list.id} className={list.status ? "done" : ""} >
          <span className="label">{list.title}</span>
          <div className="actions">
            <input
              type="checkbox"
              className="nut-hanhdong nut-hanhdong-hoanthanh"
              checked = {Boolean(list.status)}
              onChange={(e)=>setListStatus(list.id,e.target.checked)}
            />
            <button onClick={(e)=>removeList(list.id)} className="nut-hanhdong nut-hanhdong-xoa">❌</button>
          </div>
        </li>))}
       
      </ul>
      <div className="boloc-congviec">
        <label htmlFor="boloc">Chi hien thi nhung viec chua lam</label>
        <input type="checkbox" id="boloc" checked={showcomplete}  onChange={(e)=> setShowcomplete(e.target.checked)} />
      </div>
      </>
  )
}

export default List
