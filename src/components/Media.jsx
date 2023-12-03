import { AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from "react-icons/ai";

export default function Media(){
  return(
    <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
      <AiOutlineWhatsApp className="cursor-pointer hover:text-green-700" onClick={()=>{
       window.open('https://wa.me/6282249907755');
      }}/>
      <AiFillGithub className="cursor-pointer hover:text-gray-800 dark:hover:text-gray-400" onClick={()=>{
        window.open('https://github.com/nawafilhusnul');
      }}/>
      <AiFillLinkedin className="cursor-pointer hover:text-blue-800" onClick={()=>{
        window.open('https://linkedin.com/in/husnulnawafil');
      }}/>
    </div>
  )
}