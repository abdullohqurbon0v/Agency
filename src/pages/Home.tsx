import { motion } from "framer-motion";

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
  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };
  const childVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.0, ease: "easeOut" },
    },
  };

  return (
    <main className="space-y-20 sm:space-y-40">
      <motion.section
        id="about"
        className="min-h-[80vh] p-6 sm:p-10 flex flex-col sm:flex-row justify-center items-center space-y-5 sm:space-y-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.div
          className="flex flex-col space-y-6 items-start"
          variants={childVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }}
        >
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-[100%] sm:max-w-5xl bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-center"
            variants={childVariants}
          >
            Turn Clicks into Customers, and Customers into Brand Loyalist
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-3xl text-gray-200  text-center max-w-5xl mx-auto"
            variants={childVariants}
          >
            We drive traffic,increase conversesions, and scale your online store
            throught data-driven strategies.
          </motion.p>
          <motion.button
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg  cursor-pointer transition-shadow duration-300 mx-auto"
            variants={childVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Book in your free Demo
          </motion.button>
        </motion.div>
      </motion.section>

      <motion.section
        id="services"
        className="min-h-screen p-6 sm:p-10 max-w-[1650px] mx-auto flex flex-col sm:flex-row justify-between items-start"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2 }}
      >
        <motion.div
          className="space-y-5 w-full sm:w-2/4 sticky top-80"
          variants={childVariants}
        >
          <h1 className="text-4xl sm:text-6xl bg-gradient-to-r from-purple-200 to-blue-300 bg-clip-text tracking-tight text-transparent font-bold drop-shadow-lg">
            Your Getaway to Infinite Possibilities
          </h1>
          <p className="text-gray-200 mb-4 drop-shadow-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            exercitationem fugit odit explicabo deserunt ipsum.
          </p>
          <button className="px-4 py-2 bg-[rgba(23,37,84,0.9)] text-purple-300 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300">
            Functionality
          </button>
        </motion.div>
        <motion.div
          className="space-y-4 w-full sm:w-1/3"
          variants={childVariants}
        >
          {cards.map((item) => (
            <motion.div
              key={item.subtitle}
              className="w-full sm:w-[500px] h-[250px] sm:h-[300px] bg-[rgba(23,37,84,0.6)] rounded-xl p-5 border-2 border-[rgba(74,36,157,0.5)] shadow-xl hover:shadow-[0_0_15px_rgba(147,51,234,0.6)] transition-shadow duration-500 flex flex-col justify-between items-start relative overflow-hidden"
              variants={childVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(74,36,157,0.1)] via-[rgba(23,37,84,0.1)] to-[rgba(147,51,234,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <div className="relative z-10 text-purple-300 border border-[rgba(147,51,234,0.4)] rounded-md inline-block px-3 py-1 bg-[rgba(17,24,39,0.5)] shadow-md shadow-[rgba(147,51,234,0.2)]">
                {item.company_name}
              </div>
              <div className="relative z-10 rounded-xl max-w-[300px] space-y-3 p-3 bg-[rgba(31,41,55,0.7)] border border-[rgba(74,36,157,0.5)] shadow-inner shadow-[rgba(0,0,0,0.4)]">
                <p
                  className="text-2xl text-gray-100 font-semibold tracking-tight"
                  style={{ textShadow: "0 0 5px rgba(147,51,234,0.7)" }}
                >
                  {item.subtitle}
                </p>
                <p
                  className="text-gray-200 text-sm leading-relaxed"
                  style={{ textShadow: "0 0 3px rgba(0,0,0,0.5)" }}
                >
                  {item.description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-[rgba(147,51,234,0.5)] transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <section
        id="process"
        className="min-h-screen p-6 sm:p-10 bg-[rgba(74,36,157,0.1)]"
      >
        <div className="max-w-[1650px] mx-auto flex flex-col space-y-5 items-center">
          <p className="text-center text-7xl">
            VestraX is the proven e-commerce growth partner for Sports apparel &
            equipment brands ready to power past 8 figures
          </p>
          <div className="">
            <button className="px-6 py-4 bg-black rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 cursor-pointer transition-shadow duration-300 ">
              Book Your Free Demo
            </button>
          </div>
        </div>
        <div className="flex max-w-[1650px] mx-auto">
          <div className="w-2/4"></div>
          <div>
            <h4>About VestraX</h4>
            <p>Strategize, Optimize, Dominate</p>
            <p>
              The sports apparel and equipment industry is crowded, making it
              tough for brands to stand out and reach the next revenue
              milestone. Many businesses struggle with inconsistent sales,
              rising ad costs, and fierce competition.
            </p>
            <p>
              Without a specialized marketing strategy, even the most innovative
              products can get lost in the noise. Brands end up wasting money on
              poorly targeted ads, while missing out on loyal, lifelong fans.
            </p>
            <p>
              At VestraX, we combine data-driven insights with our passion for
              sports to help you scale efficiently. Our targeted ad campaigns,
              conversion optimization, and influencer partnerships ensure your
              brand thrives in a hyper-competitive market—helping you move past
              6- or 7-figure ceilings and onto 8-figure success.
            </p>
            <p>Why Sports?</p>
            <p>
              Our team is made up of former athletes, fitness enthusiasts, and
              marketing pros who understand the mindset of sports consumers.
              We’ve seen firsthand how community, authenticity, and performance
              drive purchasing decisions in this space. We chose this niche
              because we believe in empowering brands that encourage active,
              healthy lifestyles.
            </p>
            <button>Book Your Free Demo</button>
          </div>
        </div>
      </section>

      <section
        id="team"
        className="min-h-screen p-6 sm:p-10 bg-[rgba(23,37,84,0.1)]"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Blog</h1>
        <p className="text-base sm:text-lg text-gray-200 mt-2">
          This is the Blog section.
        </p>
        <div></div>
      </section>

      <section
        id="faq"
        className="min-h-screen p-6 sm:p-10 bg-[rgba(74,36,157,0.1)]"
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-white">Blog</h1>
        <p className="text-base sm:text-lg text-gray-200 mt-2">
          This is the Blog section.
        </p>
      </section>
    </main>
  );
};

export default Home;
