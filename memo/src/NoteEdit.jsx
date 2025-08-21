import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

function NoteEdit({ notes, setNotes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((n) => n.id === Number(id));

  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedNotes = notes.map((n) =>
      n.id === note.id ? { ...n, title, content } : n
    );
    setNotes(updatedNotes);
    navigate(`/notes/${note.id}`); // 수정 후 상세 페이지로 이동
  };

  return (
    <div>
      <h2>메모 수정</h2>
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
export default NoteEdit;
