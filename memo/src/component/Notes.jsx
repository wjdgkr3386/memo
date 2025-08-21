import { Link } from "react-router-dom";
import { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([
    { id: 1, title: "첫 번째 메모", content: "리액트 라우터 연습" },
    { id: 2, title: "두 번째 메모", content: "Context API 복습" },
  ]);

  return (
    <div>
      <h2>메모 목록</h2>
      <Link to="/new">새 메모 작성</Link>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <Link to={`/notes/${note.id}`}>{note.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Notes;
