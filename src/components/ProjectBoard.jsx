import axios from "axios";
import { useEffect, useState } from "react"
import ProjectCard from "./ProjectCard";
import { configs } from "../../settings";

export default function ProjectBoard() {
  const [ projects, setProjects ] = useState([]);
  const [error, setError] = useState(null);
  const backendUrl = configs.backendUrl;
  const fetchData = async () => {
    try {
      setError(null)
      const response = await axios.get(`${backendUrl}/projects`);
      setProjects(response.data.data);
    } catch (e) {
      setError(e)
      console.error("Error fetching data:", e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    error
      ?
        <div className="flex flex-grow"></div>
      :
        <div className="md:text-center mx-auto md:max-w-[90%] py-16">
          <h2 className="dark:text-teal-600 text-gray-700 text-3xl mb-8 mt-16 font-bold">My Projects</h2>
          <div className="justify-center my-3 mx-auto sm:max-w-[90%]">
            <ul className="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 gap-4">
              {
                projects.map((project) => (
                  <li key={project.id} className="">
                    <ProjectCard project={ project } />
                  </li>
              ))}
            </ul>
          </div>
        </div>
  )
}