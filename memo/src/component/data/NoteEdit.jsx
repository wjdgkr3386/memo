import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NoteEdit({ notes, setNotes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find(n => n.id === parseInt(id));

  if (!note) {
    return <div>메모를 찾을 수 없습니다.</div>;
  }

  const [title, setTitle] = React.useState(note.title);
  const [content, setContent] = React.useState(note.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes(notes.map(n => n.id === parseInt(id) ? { ...n, title, content } : n));
    navigate(`/notes/${id}`);
  };

  return (
    <div>
      <h2>메모 수정</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>제목:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>내용:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">수정 완료</button>
      </form>
    </div>
  );
}

export default NoteEdit;
