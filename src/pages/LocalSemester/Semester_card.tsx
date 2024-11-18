  import { Semester } from './LocalSemester';

  interface SemesterCardProps {
    data: Semester;
    onDelete:(id:string) => void; //void는 아무 값도 반환하지 않는다.
  }

  const Semester_card:React.FC<SemesterCardProps> = ({data,onDelete}) => {

    function onClickPatch(){
      
    }



    function onClickDelete(){
      fetch('http://localhost:3001/local-semester/'+data.id,{
        method: "Delete",
        })
        .then(r=>{
          if(r.ok){
            onDelete(data.id)
          }
        })


    }



    return (

  <div className="w-1/3 p-4 bg-gray-200 border border-black rounded-lg">
    {/* 제목 */}
    <div className="text-center text-black border-b border-black py-2 text-base">
      {data.title}
    </div>
    {/* 글쓴이 */}
    <div className="border border-black my-2 flex justify-end items-center p-0">
      
      <div className="bg-gray-400 h-10 w-14 grid place-items-center">
        <span className="text-sm text-black">
          글쓴이
        </span>
      </div>
    </div>

    {/* 이미지 */}
    <div className="flex justify-center">
      <img className="w-96 h-96 object-contain"  src={data.imageUrl} alt="이미지" />
    </div>

    {/* 내용 */}
    <div className="border border-black flex flex-col items-center justify-center py-16 my-2">
      <span className="text-xl text-black">
        {data.content}
      </span>
    </div>

    {/* 삭제/수정 버튼 */}
    <div className="flex justify-end mt-2">
      <button
        className="transition delay-150 bg-gray-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-1 text-black rounded-lg"
        onClick={onClickDelete}
      >
        삭제
      </button>
      <button
        className="transition delay-150 bg-gray-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-1 text-black rounded-lg"
        onClick={onClickPatch}
      >
        수정
      </button>
    </div>
  </div>




    )
  }

  export default Semester_card