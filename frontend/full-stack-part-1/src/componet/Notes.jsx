export const Notes = (props) => {


    
  return (
    <div className="notes-container">
      {props.notes.map((e) => {
        return (
          <div className="note-card" key={e.id}>
            <h3>{e.title}</h3>
            <p>{e.description}</p>
            <div className="note-actions">
  <button
    className="delete-btn"
    onClick={() => props.deletenote(e._id)}
  >
    Delete
  </button>

  <button
    className="update-btn"
    onClick={() => {
      
      if(props.ShowAddNote)
      {
        setShowAddNote(false)
      }
      else{
        props.setShowAddNote(true);
      }
      props.setisupdated(true);
      props.seteditnoId(e._id);
    }}
  >
    Update
  </button>
</div>

          </div>
        );
      })}
    </div>
  );
};
