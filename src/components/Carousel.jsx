export default function Carousel(){
  return (
    <div className="carousel w-full lg:max-w-[50%] mx-auto flex rounded-lg pb-10">
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://firebasestorage.googleapis.com/v0/b/me-dashboard-4830a.appspot.com/o/landscape-placeholder-e1608289113759.png?alt=media" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 left-1 md:right-5 right-1 top-1/2 ">
          <a href="#slide4" className="btn btn-circle bg-transparent text-gray-200 border-transparent">❮</a> 
          <a href="#slide2" className="btn btn-circle bg-transparent text-gray-200 border-transparent">❯</a>
        </div>
      </div> 
      <div id="slide2" className="carousel-item relative w-full">
      <img src="https://firebasestorage.googleapis.com/v0/b/me-dashboard-4830a.appspot.com/o/landscape-placeholder-e1608289113759.png?alt=media" className="w-full" />
      <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 left-1 md:right-5 right-1 top-1/2 ">
          <a href="#slide1" className="btn btn-circle bg-transparent text-gray-200 border-transparent">❮</a> 
          <a href="#slide3" className="btn btn-circle bg-transparent text-gray-200 border-transparent">❯</a>
        </div>
      </div> 
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://firebasestorage.googleapis.com/v0/b/me-dashboard-4830a.appspot.com/o/landscape-placeholder-e1608289113759.png?alt=media" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 left-1 md:right-5 right-1 top-1/2 ">
          <a href="#slide2" className="btn btn-circle bg-transparent text-gray-200 border-transparent">❮</a> 
          <a href="#slide4" className="btn btn-circle bg-transparent text-gray-200 border-transparent">❯</a>
        </div>
      </div> 
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://firebasestorage.googleapis.com/v0/b/me-dashboard-4830a.appspot.com/o/landscape-placeholder-e1608289113759.png?alt=media" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 left-1 md:right-5 right-1 top-1/2 ">
          <a href="#slide3" className="btn btn-circle bg-transparent text-gray-200 border-transparent">❮</a> 
          <a href="#slide1" className="btn btn-circle bg-transparent text-gray-200 border-transparent">❯</a>
        </div>
      </div>
    </div>
  )
}