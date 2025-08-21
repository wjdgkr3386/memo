import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./Home";
import Notes from "./Notes";
import NoteDetail from "./NoteDetail";
import NoteForm from "./component/data/NoteForm";
import NoteEdit from "./component/data/NoteEdit";

function App() {
  const [notes, setNotes] = useState([
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
        <Route path="/notes/edit/:id" element={<NoteEdit notes={notes} setNotes={setNotes} />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
