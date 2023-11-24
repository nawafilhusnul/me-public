import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar({ darkMode , setDarkMode }) {
  return (
    <>
    <nav className="py-10 mb-12 flex justify-between select-none">
      <h1 className="text-xs xs:text-xl font-mono dark:text-gray-200">nawafilhusnul.com</h1>
      <ul className="flex items-center">
        <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-300"/></li>
        <li><button className="hover:bg-gradient-to-r from-cyan-500  to-teal-500 dark:text-white px-4 py-2 rounded-md ml-8 text-sm border border-cyan-500" onClick={()=>document.getElementById('resume_modal').showModal()}>Resume</button></li>
      </ul>
    </nav>
  </>
  )
}
