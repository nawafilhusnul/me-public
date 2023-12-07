import Navbar from './components/Navbar'
import Media from './components/Media'
import About from './components/About'
import { useState } from 'react';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  const [ darkMode, setDarkMode ] = useState(true);
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <main className='dark:bg-gray-900 px-10 h-screen'>
        <section>
          <Navbar darkMode={ darkMode } setDarkMode={ setDarkMode }/>
          <About />
          <Media />
        </section>
        {/* <section>
        <h2 className="text-md pt-20 pb-6 text-teal-800 font-medium md:text-3xl text-center">My Works Gallery</h2>
          <Carousel />
        </section> */}
        <Footer />
      </main>
    </div>
  )
}

export default App
