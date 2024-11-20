import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMember = () => {
  const [teamMember, setTeamMember] = useState({
    title: "",
    age: 0,
    major: "",
    content: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTeamMember({
      ...teamMember,
      [name]: name === "age" ? Number(value) : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const onClickAdd = async () => {
    const formData = new FormData();

    // FormData에 각 필드 추가
    formData.append("title", teamMember.title);
    formData.append("age", String(teamMember.age)); // 숫자는 문자열로 변환
    formData.append("major", teamMember.major);
    formData.append("content", teamMember.content);
    if (selectedFile) {
      formData.append("files", selectedFile);
    }

    try {
      const response = await fetch(`http://localhost:3001/team-members`, {
        method: "POST",
        body: formData,
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // response.json()은 Promise를 반환하므로 await를 사용하여 값을 추출
      const data = await response.json();
      setTeamMember(data);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
    navigate("/introduction");
  };

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
    <div className="introduction-description">
      introduction-description
      <button onClick={onClick0}>홈</button>
      <button onClick={onClick1}>조원소개</button>
      <button onClick={onClick2}>현지학기</button>
      <button onClick={onClick3}>게시판</button>
      <div className="wrap-my-content-description">
        <div
          className="one-card"
          style={{
            backgroundImage: `url("${
              selectedFile ? URL.createObjectURL(selectedFile) : ""
            }")`,
          }}
        >
          <h1 className="preview">Preview</h1>
          <div className="overlay">
            <div className="content">
              <h2 className="member-name">{teamMember.title}</h2>
              {teamMember.age === 0 ? (
                <p className="member-age">비밀</p>
              ) : (
                <p className="member-age">{teamMember.age}세</p>
              )}
              <p className="member-major">{teamMember.major}</p>
              <p className="member-content">「{teamMember.content}」</p>
            </div>
          </div>
        </div>
        <div className="right-content">
          <div className="button-group">
            <button onClick={onClickAdd}>진모띠</button>
          </div>
          <div className="one-input">
            <h1>이름</h1>
            <input type="text" name="title" onChange={handleInputChange} />
          </div>
          <div className="one-input">
            <h1>나이</h1>
            <input type="text" name="age" onChange={handleInputChange} />
          </div>
          <div className="one-input">
            <h1>전공</h1>
            <input type="text" name="major" onChange={handleInputChange} />
          </div>
          <div className="one-input">
            <h1>한 마디</h1>
            <input type="text" name="content" onChange={handleInputChange} />
          </div>
          <div className="file-group">
            <h1>사진 업로드</h1>
            <input
              type="file"
              name="files"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMember;
