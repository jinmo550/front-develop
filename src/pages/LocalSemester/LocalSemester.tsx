// 현지학기 소개 페이지
import "../../styles/localsemester.css";
import { useNavigate } from "react-router-dom";
import Semester_card from "./Semester_card";
import { useEffect, useState } from "react";

export interface Semester{
  id:string,
  title:string,
  content:string,
  imageUrl:string,
}

const LocalSemester = () => {
  const navigate = useNavigate();

  const [data,setData] = useState<Semester[]>([]);


  useEffect(()=>{
    fetch('http://localhost:3001/local-semester',{
      method: "GET",
      // headers: {
      //   "Content-Type": "application/json",}
      })
      .then((r) => r.json()) 
      .then((d) => {
        setData(d);

      })
  },[])

  console.log(data);

  const handleDelete = (id:string)=>{
    setData((prevSemesters) => prevSemesters.filter((item) =>item.id !==id))
  }   //setData 에서 내가 삭제버튼을 누르면 data에서 해당 id를 삭제하겠다.
 
  



  return (
    <div className="local-semester">
      LocalSemester
      <div className="container">
        <button onClick={()=>navigate("/home")}>홈</button>
        <button onClick={()=>navigate("/introduction")}>조원소개</button>
        <button onClick={()=>navigate("/localSemester")}>현지학기</button>
        <button onClick={()=>navigate("/bulletinBoard")}>게시판</button>
      </div>


      <div className="p-2 fixed bottom-4 right-4">
  <button className="bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded"
    onClick={() => { navigate("/Semester-create"); }}>
    글쓰기
  </button>
</div>


      <div className="flex flex-wrap gap-16 w-full justify-center items-center">
        {
          data.map(function(item){
              return <Semester_card data={item} onDelete={handleDelete}  key={item.id}/>
          })
        }
        
      </div>
    </div>
  );
};

export default LocalSemester;

