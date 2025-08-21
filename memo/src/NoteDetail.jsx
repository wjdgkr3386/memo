import { useParams, useNavigate } from "react-router-dom";

function NoteDetail({ notes, setNotes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((n) => n.id === Number(id));

  if (!note) return <p>메모를 찾을 수 없습니다.</p>;

  const handleDelete = () => {
    setNotes(notes.filter((n) => n.id !== note.id));
    navigate("/notes"); // 삭제 후 목록으로 이동
  };

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.content}</p>
      <button onClick={handleDelete}>삭제</button>
      <button onClick={() => navigate(`/notes/edit/${note.id}`)}>수정</button>
    </div>
  );
}
export default NoteDetail;
