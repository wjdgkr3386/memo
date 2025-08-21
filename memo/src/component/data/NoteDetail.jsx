import { useParams } from "react-router-dom";

function NoteDetail() {
  const { id } = useParams();
  // 실제로는 Context나 props로 notes를 가져와야 함
  return (
    <div>
      <h2>메모 상세 페이지</h2>
      <p>메모 ID: {id}</p>
      <p>여기에 해당 메모 내용을 표시할 예정입니다.</p>
    </div>
  );
}
export default NoteDetail;
