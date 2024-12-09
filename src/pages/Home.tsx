// 홈 페이지
import { useUser } from "../Context/useUser";
import "../styles/home.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { userName,setUserName } = useUser();    


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

  const onClick4 = () => {
    navigate("/login");
  };
  
  const logout = ()=>{
    localStorage.removeItem('access_token');
    setUserName(null)
  }

  return (
    <div className="home">
      Home
      <div className="container">
        <button className="text-white" onClick={onClick0}>홈</button>
        <button className="text-white" onClick={onClick1}>조원소개</button>
        <button className="text-white" onClick={onClick2}>현지학기</button>
        <button className="text-white" onClick={onClick3}>게시판</button>
        
      </div>
      <div className="container">
        {
          userName?<button className="text-white " onClick={logout}>로그아웃</button>
          :<button className="text-white " onClick={onClick4}>로그인</button>
        }
      <p className="text-white">{userName}</p>
      </div>
      
    </div>
  );
};

export default Home;
