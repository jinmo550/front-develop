// 조원소개 페이지
import "../styles/introduction.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
`;

const Card = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  background-color: #f3f3f3;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const Introduction = () => {
  const [cards, setCards] = useState([1, 2, 3, 4, 5]); // 초기 카드 데이터
  const [width, setWidth] = useState<number>(100 / cards.length); // 초기 너비 계산
  const navigate = useNavigate();

  useEffect(() => {
    setWidth(100 / cards.length);
  }, [cards.length]);

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
    <div className="introduction">
      Introduction
      <button onClick={onClick0}>홈</button>
      <button onClick={onClick1}>조원소개</button>
      <button onClick={onClick2}>현지학기</button>
      <button onClick={onClick3}>게시판</button>
      <div className="wrap-my-content">
        <CardContainer>
          {cards.map((card, index) => (
            <Card key={index} width={width}>
              Card {card}
            </Card>
          ))}
        </CardContainer>
      </div>
    </div>
  );
};

export default Introduction;
