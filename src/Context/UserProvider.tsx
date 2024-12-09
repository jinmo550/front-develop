import { ReactNode, useEffect, useState } from "react";
import UserContext from "./UserContext";
import { jwtDecode } from "jwt-decode";

// UserProvider 컴포넌트를 정의
// 이 컴포넌트는 자식 컴포넌트(children)를 감싸서 사용자 이름 상태를 제공함
export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // userName 상태와 이를 설정하는 setUserName 함수를 useState 훅을 사용하여 정의
  // 초기값은 null로 설정
  const [userName, setUserName] = useState<string | null>(()=>{
    const token = localStorage.getItem('access_token');
    if(token){
      const decodetoken:any =  jwtDecode(token);
      return decodetoken.name
    }return null
  });




  return (
    // UserContext.Provider로 감싸서 Context 값을 제공
    // value 속성으로 현재 userName 상태와 이를 설정하는 setUserName 함수를 전달
    <UserContext.Provider value={{ userName, setUserName }}>
      {children} {/* 자식 컴포넌트를 렌더링 */}
    </UserContext.Provider>
  );
}

// UserProvider 컴포넌트를 기본 내보내기로 설정하여 다른 파일에서 import하여 사용할 수 있도록 함
