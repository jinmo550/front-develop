// 조원소개 페이지
import "../styles/introduction.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// id, name, age, major, hitokoto, image

const Introduction = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    // 유저 정보 불러오기
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(`localhost:3000/team-members`, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        setTeamMembers((prev) => [...prev, data]);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const navigate = useNavigate();
  // const [id, setId] = useState("");

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

  const onClickProfile = (pram: string) => {
    navigate("/introduction_description", { state: pram });
  };

  return (
    <div className="introduction">
      Introduction
      <button onClick={onClick0}>홈</button>
      <button onClick={onClick1}>조원소개</button>
      <button onClick={onClick2}>현지학기</button>
      <button onClick={onClick3}>게시판</button>
      <div className="wrap-my-content">
        {TeamMember.map((item, index) => {
          return (
            <div
              className="one-card"
              key={index}
              style={{
                backgroundImage: "url(" + item.image + ")",
              }}
              onClick={() => {
                onClickProfile(item.name);
              }}
            >
              <div className="overlay">
                <div className="content">
                  <h2 className="member-name">{item.name}</h2>
                  <p className="member-age">{item.age}세</p>
                  <p className="member-major">{item.major}</p>
                  <p className="member-hitokoto">「{item.hitokoto}」</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Introduction;
