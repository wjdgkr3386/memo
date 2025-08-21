import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Notes from "./Notes";
import NoteDetail from "./NoteDetail";
import NoteForm from "./NoteForm";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">홈</Link> | <Link to="/notes">메모</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id" element={<NoteDetail />} />
        <Route path="/new" element={<NoteForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
