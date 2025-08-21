import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>메모장 앱에 오신 것을 환영합니다!</h1>
      <p>간단한 메모를 작성하고 관리할 수 있는 앱입니다.</p>
      <Link to="/notes">
        <button>메모 목록 보기</button>
      </Link>
    </div>
  );
}

export default Home;
