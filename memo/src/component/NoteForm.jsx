import { useState } from "react";

function NoteForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { id: Date.now(), title, content };
    console.log("새 메모:", newNote); // → 다음 교시에서 Notes에 연결 예정
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <h2>새 메모 작성</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="제목 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="내용 입력"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}
export default NoteForm;
