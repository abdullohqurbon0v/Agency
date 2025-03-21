import { Button } from "../components/ui/button";

interface CardType {
  subtitle: string;
  description: string;
  company_name: string;
}

const cards: CardType[] = [
  {
    subtitle: "Process Part 1",
    description: "Initial planning and strategy development for the project.",
    company_name: "Acme Corp",
  },
  {
    subtitle: "Process Part 2",
    description: "Market research and analysis to identify opportunities.",
    company_name: "Insight Analytics",
  },
  {
    subtitle: "Process Part 3",
    description: "Design and prototyping of key features and interfaces.",
    company_name: "Creative Labs",
  },
  {
    subtitle: "Process Part 4",
    description: "Development and implementation of core functionalities.",
    company_name: "DevSolutions Inc.",
  },
  {
    subtitle: "Process Part 5",
    description: "Testing, QA, and performance optimization.",
    company_name: "Quality First",
  },
  {
    subtitle: "Process Part 6",
    description: "Deployment, monitoring, and post-launch support.",
    company_name: "LaunchPad Systems",
  },
];

const Home = () => {
  return (
    <main className="space-y-20 sm:space-y-40">
      <section
        id="our-process"
        className="min-h-[80vh] p-6 sm:p-10 flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-6"
      >
        <div className="flex flex-col space-y-6 items-start ">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-[100%] sm:max-w-3xl">
            [INSERT SUB-NICHE SPECIFIC ATTENTION-GRABBING HEADLINE]
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-[90%] sm:max-w-xl">
            GET YOUR FREE [INSERT IRRESISTIBLE DEMO CALL OFFER]
          </p>
          <Button>Book in your free Demo</Button>
        </div>
        <div className="w-full max-w-full sm:max-w-[600px] md:max-w-[800px] h-[200px] sm:h-[300px] md:h-[400px] bg-white rounded-lg shadow-lg overflow-hidden">
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
      <section
        id="about-us"
        className="min-h-screen p-6 sm:p-10 max-w-[1650px] mx-auto flex flex-col sm:flex-row justify-between items-center"
      >
        <div className="space-y-5 w-full sm:w-2/4">
          <Button>Funcionality</Button>
          <h1 className="text-4xl sm:text-6xl bg-gradient-to-r from-white to-gray-500 bg-clip-text  tracking-tight text-transparent">
            Your Getaway to Infinity Possibilities
          </h1>
          <p className="text-gray-100 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            exercitationem fugit odit explicabo deserunt ipsum.
          </p>
        </div>
        <div className="space-y-4 h-[800px] overflow-y-scroll">
          {cards.map((item) => (
            <div
              key={item.subtitle}
              className="w-[320px] sm:w-[500px] h-[250px] sm:h-[300px] border-2 rounded-xl p-5 shadow-xl flex flex-col items-start justify-between"
            >
              <div className="text-green-500 border rounded-md inline-block px-2">
                {item.company_name}
              </div>
              <div className="rounded-xl max-w-[300px] space-y-3 p-3 bg-[#1e1f1e]">
                <p className="text-2xl ">{item.subtitle}</p>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="philosophy" className="min-h-screen p-6 sm:p-10">
        <div></div>
      </section>
      <section id="blog" className="min-h-screen p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Blog</h1>
        <p className="text-base sm:text-lg text-gray-300 mt-2">
          This is the Blog section.
        </p>
      </section>
    </main>
  );
};

export default Home;
