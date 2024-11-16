import { Semester } from './LocalSemester';

interface SemesterCardProps {
  data: Semester;
}

const Semester_card:React.FC<SemesterCardProps> = ({data}) => {

  function onClickPatch(){
    fetch('http://localhost:3001/local-semester',{
      method: "Patch",
      headers: {
        "Content-Type": "application/json",},
      body:JSON.stringify(data.id)
      });
  }

console.log(data.id);

  function onClickDelete(){
    fetch('http://localhost:3001/local-semester/'+data.id,{
      method: "Delete",
      });
  }


  return (
    <div className="  p-4 bg-gray-200 border border-black rounded-lg ml-12">
      {/* 제목 */}
    <div className="text-center text-black border-b border-black py-2 text-base">
      {data.title}
    </div>
      {/* 글쓴이 */}
    <div className="border border-black my-2 flex justify-end items-center p-0">
      <div className="bg-gray-400 h-10 w-14 grid place-items-center">
        <span className="text-sm text-black ">
          글쓴이
          </span>
      </div>
    </div>

    <div className='flex '>
    <img className="object-scale-down" src={data.imageUrl} />
    </div>

    <div className="border border-black flex flex-col items-center justify-center py-16 my-2">
      <span className="text-xl text-black">
        {data.content}
      </span>
    </div>


    <div className="flex justify-end mt-2  ">
    <button className="transition  delay-150 bg-gray-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-1 text-black rounded-lg "
      onClick={onClickDelete}
      >
        삭제
      </button>
      <button className="transition  delay-150 bg-gray-400 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 px-4 py-1 text-black rounded-lg "
      onClick={onClickPatch}
      >
        수정
      </button>
    </div>

  </div>
  )
}

export default Semester_card