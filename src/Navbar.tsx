
import { useNavigate } from 'react-router-dom';
import { useUser } from './Context/useUser';

const Navbar = () => {
  const navigate = useNavigate()
  const { userName,setUserName } = useUser();


  const handleLogout = () => {
    navigate("/login");
  };

  const handleLogin = ()=>{
    localStorage.removeItem('access_token');
    setUserName(null)
  }

  return (
  
<div>
  <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
      <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">5조</span>
      </a>
      <div className="flex items-center space-x-14 ">
  <p className="text-white">{userName}님 안녕하세요.</p>
  {userName ? (
    <button 
      onClick={handleLogout} 
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 transform transition-all hover:scale-110"
    >
      로그아웃
    </button>
  ) : (
    <button 
      onClick={handleLogin} 
      className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 transform transition-all hover:scale-110"
    >
      로그인
    </button>
  )}
</div>
    </div>
  </nav>
  <nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
      <div className="flex items-center">
        <ul className="flex flex-row font-medium mt-0 space-x-20 rtl:space-x-reverse text-sm">
          <li>
            <a href="/" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 transform transition-all hover:scale-110" aria-current="page">
              홈
            </a>
          </li>
          <li>
            <a href="/introduction" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 transform transition-all hover:scale-110">
              조원소개
            </a>
          </li>
          <li>
            <a href="/localSemester" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 transform transition-all hover:scale-110">
              현지학기제
            </a>
          </li>
          <li>
            <a href="/bulletinBoard" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-blue-300 transform transition-all hover:scale-110">
              게시판
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>


  )
}

export default Navbar