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

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
  tap: { scale: 0.95 },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  hover: { scale: 1.02, transition: { duration: 0.3 } },
};

const Home = () => {
  return (
    <main className="space-y-20 sm:space-y-40 w-full">
      <motion.section
        id="about"
        className="min-h-[80vh] relative flex flex-col justify-center items-center space-y-5 sm:space-y-6 overflow-hidden mt-5"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-70 z-0"
        >
          <source src="/4408477.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          className="flex flex-col space-y-6 items-center relative z-10"
          variants={containerVariants}
        >
          <motion.h1
            className="text-2xl md:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-purple-200 to-blue-300 bg-clip-text tracking-tight text-transparent max-w-[100%] sm:max-w-5xl text-center"
            variants={childVariants}
          >
            Turn Clicks into Customers, and Customers into Brand Loyalist
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-3xl text-gray-200 text-center max-w-5xl mx-auto"
            variants={childVariants}
          >
            We drive traffic, increase conversions, and scale your online store
            through data-driven strategies.
          </motion.p>
          <motion.button
            className="px-4 py-2 bg-black text-white rounded-lg shadow-lg cursor-pointer transition-shadow duration-300 mx-auto"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Book in your free Demo
          </motion.button>
        </motion.div>
      </motion.section>
      <motion.section
        id="services"
        className="min-h-screen p-4 sm:p-6 lg:p-10 max-w-[1650px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-8"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {/* Left Column */}
        <motion.div
          className="space-y-4 w-full lg:w-1/2 sticky top-20 lg:top-80"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-purple-200 to-blue-300 bg-clip-text tracking-tight text-transparent font-bold drop-shadow-lg"
            variants={childVariants}
          >
            Your Getaway to Infinite Possibilities
          </motion.h1>
          <motion.p
            className="text-gray-200 text-sm sm:text-base lg:text-lg mb-4 drop-shadow-md max-w-md"
            variants={childVariants}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            exercitationem fugit odit explicabo deserunt ipsum.
          </motion.p>
          <motion.button
            className="px-4 py-2 bg-[rgba(23,37,84,0.9)] text-purple-300 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300 text-sm sm:text-base"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Functionality
          </motion.button>
        </motion.div>
        <motion.div
          className="space-y-4 w-full lg:w-1/3"
          variants={containerVariants}
        >
          {cards.map((item) => (
            <motion.div
              key={item.subtitle}
              className="w-full max-w-[500px] h-[220px] sm:h-[250px] lg:h-[300px] bg-[rgba(23,37,84,0.6)] rounded-xl p-4 sm:p-5 transition-shadow duration-500 flex flex-col justify-between items-start relative overflow-hidden mx-auto"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(74,36,157,0.1)] via-[rgba(23,37,84,0.1)] to-[rgba(147,51,234,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <motion.div
                className="relative z-10 text-purple-300 border border-[rgba(147,51,234,0.4)] rounded-md inline-block px-2 sm:px-3 py-1 bg-[rgba(17,24,39,0.5)]  text-xs sm:text-sm"
                variants={childVariants}
              >
                {item.company_name}
              </motion.div>
              <motion.div
                className="relative z-10 rounded-xl max-w-[90%] sm:max-w-[300px] space-y-2 sm:space-y-3 p-3 bg-[rgba(31,41,55,0.7)] border "
                variants={childVariants}
              >
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 font-semibold tracking-tight">
                  {item.subtitle}
                </p>
                <p
                  className="text-gray-200 text-xs sm:text-sm leading-relaxed"
                  style={{ textShadow: "0 0 3px rgba(0,0,0,0.5)" }}
                >
                  {item.description}
                </p>
              </motion.div>
              <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-[rgba(147,51,234,0.5)] transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <motion.section
        id="process"
        className="min-h-screen p-6 sm:p-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="max-w-[1650px] mx-auto flex flex-col space-y-5 items-center"
          variants={containerVariants}
        >
          <motion.p
            className="text-center text-4xl sm:text-5xl font-bold"
            variants={childVariants}
          >
            VestraX is the proven e-commerce growth partner for Sports apparel &
            equipment brands ready to power past 8 figures
          </motion.p>
          <motion.div variants={childVariants}>
            <motion.button
              className="px-6 py-4 bg-black text-white rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book Your Free Demo
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="max-w-[1650px] mx-auto flex flex-col md:flex-row gap-8 mt-96"
          variants={containerVariants}
        >
          <motion.div
            className="w-full md:w-1/2 bg-gray-200 h-64 md:h-auto"
            variants={childVariants}
          ></motion.div>
          <motion.div className="w-full md:w-1/3" variants={containerVariants}>
            <motion.h4
              className="text-xl font-semibold mb-2"
              variants={childVariants}
            >
              About VestraX
            </motion.h4>
            <motion.p className="font-medium mb-4" variants={childVariants}>
              Strategize, Optimize, Dominate
            </motion.p>
            <motion.p className="mb-4" variants={childVariants}>
              The sports apparel and equipment industry is crowded, making it
              tough for brands to stand out and reach the next revenue
              milestone. Many businesses struggle with inconsistent sales,
              rising ad costs, and fierce competition.
            </motion.p>
            <motion.p className="mb-4" variants={childVariants}>
              Without a specialized marketing strategy, even the most innovative
              products can get lost in the noise. Brands end up wasting money on
              poorly targeted ads, while missing out on loyal, lifelong fans.
            </motion.p>
            <motion.p className="mb-4" variants={childVariants}>
              At VestraX, we combine data-driven insights with our passion for
              sports to help you scale efficiently. Our targeted ad campaigns,
              conversion optimization, and influencer partnerships ensure your
              brand thrives in a hyper-competitive market—helping you move past
              6- or 7-figure ceilings and onto 8-figure success.
            </motion.p>

            <motion.p
              className="font-semibold mt-6 mb-2"
              variants={childVariants}
            >
              Why Sports?
            </motion.p>
            <motion.p className="mb-4" variants={childVariants}>
              Our team is made up of former athletes, fitness enthusiasts, and
              marketing pros who understand the mindset of sports consumers.
              We’ve seen firsthand how community, authenticity, and performance
              drive purchasing decisions in this space. We chose this niche
              because we believe in empowering brands that encourage active,
              healthy lifestyles.
            </motion.p>
            <motion.button
              className="px-6 py-4 bg-black text-white rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300 mt-4"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book Your Free Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.section>
      <motion.section
        id="team"
        className="min-h-screen p-6 sm:p-10 bg-[rgba(23,37,84,0.1)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-white"
          variants={childVariants}
        >
          Blog
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-200 mt-2"
          variants={childVariants}
        >
          This is the Blog section.
        </motion.p>
        <motion.div variants={childVariants}></motion.div>
      </motion.section>
      <motion.section
        id="faq"
        className="min-h-screen p-6 sm:p-10 bg-[rgba(74,36,157,0.1)]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-white"
          variants={childVariants}
        >
          Blog
        </motion.h1>
        <motion.p
          className="text-base sm:text-lg text-gray-200 mt-2"
          variants={childVariants}
        >
          This is the Blog section.
        </motion.p>
      </motion.section>
    </main>
  );
};

export default Home;
