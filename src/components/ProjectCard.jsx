import { configs } from "../../settings.js"
export default function ProjectCard({ project }) {
  const imageUrl = configs.imageUrl;
  const storageToken = configs.storageToken;
  return (
    <div className='border-4 border-slate-300 p-3 shadow-xl'>
      <h1 className="dark:text-gray-300 pb-2">{project.title}</h1>
      <img className='object-cover ' src={`${project.photos?project.photos[0]:''}`} alt='image'/>
    </div>
  )
}