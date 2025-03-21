import Navbar from "./components/shared/navbar";

const App = () => {
  return (
    <div className="p-4 sm:p-5 pt-16 sm:pt-20">
      <Navbar />
      <main className="space-y-20 sm:space-y-40">
        <section
          id="our-process"
          className="min-h-screen p-6 sm:p-10 flex flex-col justify-center items-center space-y-5 sm:space-y-6"
        >
          {/* Заголовок */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white max-w-[90%] sm:max-w-3xl">
            [INSERT SUB-NICHE SPECIFIC ATTENTION-GRABBING HEADLINE]
          </h1>
          {/* Подзаголовок */}
          <p className="text-center text-base sm:text-lg md:text-xl text-gray-300 max-w-[90%] sm:max-w-xl">
            GET YOUR FREE [INSERT IRRESISTIBLE DEMO CALL OFFER]
          </p>
          {/* Контейнер для видео */}
          <div className="w-full max-w-[90%] sm:max-w-[600px] md:max-w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/bgvideo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </section>
        <section id="about-us" className="min-h-screen p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            About Us
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mt-2">
            This is the About Us section.
          </p>
        </section>
        <section id="philosophy" className="min-h-screen p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">
            Philosophy
          </h1>
          <p className="text-base sm:text-lg text-gray-300 mt-2">
            This is the Philosophy section.
          </p>
        </section>
        <section id="blog" className="min-h-screen p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Blog</h1>
          <p className="text-base sm:text-lg text-gray-300 mt-2">
            This is the Blog section.
          </p>
        </section>
      </main>
    </div>
  );
};

export default App;
