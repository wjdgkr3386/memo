import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react"; // Added useState
import Home from "./component/Home"; // Corrected Home import
import Notes from "./Notes";
import NoteDetail from "./NoteDetail";
import NoteForm from "./NoteForm";
import NoteEdit from "./component/data/NoteEdit"; // Added NoteEdit import

function App() {
  const [notes, setNotes] = useState([ // Added notes state
    { id: 1, title: "첫 번째 메모", content: "리액트 라우터 연습" },
    { id: 2, title: "두 번째 메모", content: "Context API 복습" },
  ]);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link> | <Link to="/notes">메모</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes notes={notes} setNotes={setNotes} />} />
        <Route path="/notes/:id" element={<NoteDetail notes={notes} setNotes={setNotes} />} />
        <Route path="/new" element={<NoteForm notes={notes} setNotes={setNotes} />} />
        <Route path="/notes/edit/:id" element={<NoteEdit notes={notes} setNotes={setNotes} />} /> {/* Added NoteEdit route */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
