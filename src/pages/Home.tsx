// 홈 페이지
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const onClick0 = () => {
    navigate("/home");
  };

  const onClick1 = () => {
    navigate("/introduction");
  };

  const onClick2 = () => {
    navigate("/localSemester");
  };

  const onClick3 = () => {
    navigate("/bulletinBoard");
  };

  return (
    <div className="home">
      Home
      <div className="container">
        <button onClick={onClick0}>홈</button>
        <button onClick={onClick1}>조원소개</button>
        <button onClick={onClick2}>현지학기</button>
        <button onClick={onClick3}>게시판</button>
      </div>
    </div>
  );
};

export default Home;
