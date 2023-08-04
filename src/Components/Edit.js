import React, {useState} from "react";
import { updateDoc, getFirestore, collection } from "firebase/firestore";

function EditTodo( ID, setEditArea){
    console.log(ID)
    const [newName, setNewName] = useState("");
    const [newDate, setNewDate] = useState("");
    const [newNote, setNewNote] = useState("");
    const db = getFirestore();
    const todoCollectionRef = collection(db, "todos");
    
    const updateTodo = async (event) => {
        let formData = {
          name: newName,
          date: newDate,
          note: newNote,
        }
        updateDoc(todoCollectionRef, {
          ...formData
        });
        event.preventDefault();
        alert("Updated")
      }

    function edit(updated){
        //ref = firebase.firestore().collection("todos")
        //ref.doc(updated.id).update(updated)
        //const db = getFirestore();
        //const up = doc(db,"todos", ID)
        //updateDoc(up, {edit})
    }

    function handleCancel() {
        setEditArea(false)
    }

    return (
        <div>
            <input type ="text" placeholder="Edit Name" onChange={(e) => setNewName(e.target.value)} />
            <input type ="date" placeholder="Edit Date" onChange={(e) => setNewDate(e.target.value)} />
            <input type ="text" placeholder="Edit Note" onChange={(e) => setNewNote(e.target.value)} />
            <button onSubmit={updateTodo}>Update</button>
            <button onCLick={handleCancel}>Cancel</button>
            
        </div>
    )

/*button onClick={() => { 
    edit({name: newName, date: newDate, note: newNote, id: ID})
    setEditArea(true)}}>Update</button>
<button onCLick={handleCancel}>Cancel</button>
*/
}
export default EditTodo;