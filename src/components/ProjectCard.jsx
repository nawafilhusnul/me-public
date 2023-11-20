import { imageBaseUrl, storageToken } from "../../settings.json"
export default function ProjectCard({ project }) {
  return (
    <div className='border-4 border-slate-300 p-3 shadow-xl'>
      <h1 className="dark:text-gray-300 pb-2">{project.title}</h1>
      <img className='object-cover ' src={`${imageBaseUrl}/20231013_153613.jpg?alt=media&token=${storageToken}`} alt='image'/>
    </div>
  )
}