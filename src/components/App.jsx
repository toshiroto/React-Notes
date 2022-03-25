
import React, { useState }from "react";
import { render } from "react-dom";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import CreateArea from "./CreateArea";

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
     return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });

  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
       {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
         />
         );
        })}
      <Footer />
    </div>
  );
}

render(<App />, document.getElementById("root"));
