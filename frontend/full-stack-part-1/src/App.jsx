import React, { useEffect, useState } from 'react'
import { Notes } from './componet/Notes'
import Navbar from './componet/Navbar'
import axios from 'axios'
import Addnote from './componet/Addnote'

const App = () => {

  const [showAddNote, setShowAddNote] = useState(false);
  const [note, setnote] = useState([])
  const [isupdated, setisupdated] = useState(true)
  const [editnoId, seteditnoId] = useState("")



  async function getnote() {
    let responce = await axios.get('http://localhost:3000/api/note')

    setnote(responce.data.notes)
  }

  async function deletenote(id) {

    let res = await axios.delete(`http://localhost:3000/api/note/${id}`)

    getnote()



  }
  async function addnote(title, description) {

    let res = await axios.post("http://localhost:3000/api/note", {
      title: title,
      description: description
    })
 
    getnote()

  }

  async function updatenote(id,title,description) {

    console.log(id);

    let res = await axios.patch(`http://localhost:3000/api/note/${id}`,{
      title:title,
      description:description
    })
    console.log(res);
    getnote();


  }


  useEffect(() => {
    getnote();
  }, [])

  return (
    <div>
      <Navbar toggleAddNote={() => setShowAddNote(!showAddNote)} editnoId={editnoId}/>
      {showAddNote && <Addnote addnote={addnote} showAddNote={showAddNote}  setShowAddNote={setShowAddNote} isupdated={isupdated} updatenote={updatenote} editnoId={editnoId}  />}



      <Notes notes={note} deletenote={deletenote} setShowAddNote={setShowAddNote} setisupdated={setisupdated} seteditnoId={seteditnoId} />
    </div>
  )
}

export default App