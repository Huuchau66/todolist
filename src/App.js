import React ,{ useState } from 'react'
import './App.css'
import Header from './component/Header'
import List from './component/List'
import Inputbox from './component/Inputbox'

function App() {
    const [header] = useState(
        {title : 'Todo List',
        content : 'Get one item done at a time'}
    )
    const [list,setList] = useState([])
    const [showcomplete,setShowcomplete] = useState(false);
    const [newtast,setNewtast] = useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (newtast){
            const tast ={
            id: Date.now(),
            title: newtast,
            status : 0,
        };
        setList([...list,tast]);
        setNewtast("")
    }
    };
    const handleInputchange = (e) => {
        setNewtast(e.target.value)
    }
    const setListStatus = (listid,status)  =>{
        setList (list.map(task=>{
            if (task.id === listid){
                return {...task,status:status? 1 : 0}
            }
            return task
        }))
    }
    const removeList = (listid) =>{
        setList(list.filter((task)=>task.id !== listid))
    }
  return (
    <div className="hop">
    <Header header={header}/>
    <List  list={list} showcomplete={showcomplete} setListStatus={setListStatus} removeList={removeList} setShowcomplete={setShowcomplete} />   
    <Inputbox handleSubmit={handleSubmit} newtast={newtast} handleInputchange={handleInputchange}/> 
    </div>
  )
}

export default App
