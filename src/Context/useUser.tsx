import { useContext } from 'react';
import UserContext from './UserContext';

// useUser 커스텀 훅을 정의
export const useUser = () => {
    // UserContext에서 현재 컨텍스트 값을 가져옴
    const context = useContext(UserContext);

    // UserContext가 제공되지 않는 경우 오류를 발생시킴
    // 이는 useUser 훅이 반드시 UserProvider 내에서 사용되도록 보장함
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }

    // UserContext의 값을 반환
    return context;
};
