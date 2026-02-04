import { useState } from "react";

const Addnote = ({addnote,setShowAddNote,updatenote ,isupdated ,editnoId}) => {

    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")


    function handlesumbit(e)
    {
        e.preventDefault()
        if(!isupdated)
        {
            
        const newnote={
            title,description
        };
        addnote(newnote.title,newnote.description);
        console.log(newnote)
        settitle("")
        setdescription("")
        setShowAddNote(false)
        }
        else
        {
            
            updatenote(editnoId,title,description);
            setShowAddNote(false)
            
        }
    }
  return (
    <div className="addnote-container">
      <form className="addnote-form" onSubmit={handlesumbit} >
        <input name="title" 
        type="text"
         placeholder="Title" 
         value={title}
         required
         onChange={(e)=>
         {
           settitle(e.target.value) ;
         }
         }
        
        />
        <input name="description" type="text" placeholder="Description" required
        value={description}
        onChange={(e)=>
        {
            setdescription(e.target.value);
        }
        } />
        <button type="submit" onSubmit={()=>
            {
               

            }
        }>Submit</button>
      </form>

    </div>
  );
}

export default Addnote
