import { createContext } from "react";

// UserContextType 인터페이스 정의
// userName: 현재 로그인한 사용자의 이름 (또는 null)
// setUserName: 사용자의 이름을 설정하는 함수
interface UserContextType {
  userName: string | null,
  setUserName: (name: string | null) => void;
}

// UserContext 생성
// 기본값은 undefined로 설정 (초기값을 제공하지 않음)
// 이 Context는 로그인한 사용자의 이름과 그 이름을 설정하는 함수를 저장함
const UserContext = createContext<UserContextType | undefined>(undefined);

// UserContext를 export하여 다른 파일에서 사용할 수 있도록 함
export default UserContext;
