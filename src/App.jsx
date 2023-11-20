import Navbar from './components/Navbar'
import Media from './components/Media'
import About from './components/About'
import { useState } from 'react';
import ProjectCard from './components/ProjectBoard';

function App() {
  const [ darkMode, setDarkMode ] = useState(true);
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <main className='dark:bg-gray-900 px-10'>
        <section>
          <Navbar darkMode={ darkMode } setDarkMode={ setDarkMode }/>
          <About />
          <Media />
        </section>
        <section>
          <ProjectCard/>
        </section>
      </main>
    </div>
  )
}

export default App
