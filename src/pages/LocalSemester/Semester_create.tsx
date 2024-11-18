// import { useState } from "react";
import { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useNavigate } from "react-router-dom";


const Semester_create = () => {

  // const [image,setImage] = useState<File | null>(null)

  // const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const fileList = event.target.files; // FileList | null 타입

  //   // fileList가 null이 아니고 파일이 존재하는 경우
  //   if (fileList && fileList.length > 0) {
  //     const file = fileList[0]; // File 타입으로 할당
  //     setImage(file); // 파일 객체를 상태에 설정
  //   }
  // }
  const [data,setData] = useState({})

  const navigate=useNavigate()



  const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {value}=e.target
    setData({
      ...data,
      ['title']:value
    })
  }

  const onClick=()=>{
    fetch('http://localhost:3001/local-semester',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",},
      body:JSON.stringify(data)
      })
      .then(r=>{
       navigate("/localSemester")
      })

  }


  return (
    <div className=" p-8 min-h-screen flex items-center justify-center ">
    <div className="max-w-4xl w-full  bg-gray-300 border border-gray-400 p-4 rounded-md">
      {/* Title Section */} 
      <div className="flex items-center border-b border-gray-400 pb-2 mb-4 text-black">
        <span className="font-bold text-lg">제목</span>
        <input
          type="text"
          className="ml-4 flex-1 border border-gray-400 bg-gray-200 px-2 py-1 text-black"
          name="title"
          onChange={(onChange)}
        />
      </div>

      {/* 작성자 */}
      <div className="flex items-center mb-4">
        <span className="font-semibold text-black">작성자</span>
        <input
          type="text"
          className="ml-4 flex-1 border text-black border-gray-400 bg-gray-200 px-2 py-1 "
          value=""
          readOnly
        />
      </div>

      {/* 이미지 */}
      {/* <div className="flex justify-between items-center bg-yellow-700 text-white p-2 mb-2">
        <input type="file"  onChange={handleImageChange}/>
      </div>

      <div className="box-border h-30 w-48  border-4">
      {
          image ? <img src={URL.createObjectURL(image)} alt="" className="object-scale-down " /> : null
      }
      </div> */}

      {/* 내용 */}
      <div className="mt-2">
    <CKEditor
      editor={ClassicEditor}
      data="<p>글을 입력해주세요</p>"
      
      onReady={(editor) => {
        console.log("에디터가 준비되었습니다!", editor);
        editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
          return {
            upload: (): Promise<{ default: string }> => {
              return loader.file
                .then((file: File | null) => {
                  if (file) {
                    return { default: URL.createObjectURL(file) }; // 파일의 임시 URL을 반환
                  }else {
                    // 파일이 null일 경우 예외를 발생시켜 명시적으로 처리합니다.
                    throw new Error("파일이 null입니다.");}
              })
            }
          }
        }  
      }
    }
      onChange={(event, editor) => {
        const content = editor.getData();
        setData({
          ...data,
          ['content']:content
        })
        console.log(data);
      }}
    />
      
  </div>

      {/* 저장버튼 */}
      <div className="flex items-center flex-row-reverse p-1">
        <button className="ml-2 bg-gray-500 text-white px-4 py-2" onClick={onClick}>저장</button>
      </div>
    </div>

  </div>
  )
}

export default Semester_create