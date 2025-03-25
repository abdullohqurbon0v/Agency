import { motion } from "framer-motion";
import {
  RiBarChartLine,
  RiComputerLine,
  RiShakeHandsLine,
  RiTeamLine,
} from "react-icons/ri";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface CardType {
  subtitle: string;
  description: string;
  company_name: string;
}

const cards: CardType[] = [
  {
    subtitle: "/1.png",
    description:
      "We maximize your Return on Ad Spend (ROAS) by leveraging audience insights, retargeting, and performance analytics to drive measurable profit.",
    company_name: "ROI-Driven Advertising",
  },
  {
    subtitle: "/2.png",
    description:
      "No guessing—just results. Our AI-powered analytics, market research, and A/B testing create adaptive campaigns for sustainable growth.",
    company_name: "Data-Backed Growth Strategies",
  },
  {
    subtitle: "/3.png",
    description:
      "We fine-tune every step of your sales funnel to boost conversion rates and drive more revenue.",
    company_name: "Conversion Rate Optimization (CRO)",
  },
  {
    subtitle: "/4.png",
    description:
      "Leverage authentic, user-generated content and influencer partnerships to build trust and spark engagement with your brand.",
    company_name: "Influencer & UGC Marketing",
  },
  {
    subtitle: "/5.png",
    description:
      "Your Growth, Our Priority. Our team of marketing veterans is committed to your growth. With tailored strategies and hands-on support, we help you scale efficiently and effectively.",
    company_name: "Testing, QA, and performance optimization.",
  },
];

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
  const work = [
    {
      icon: RiTeamLine,
      title: "Performance Mindset",
      description:
        "We operate like athletes—constantly striving for peak performance. Every campaign is approached with discipline, focus, and the drive to win.",
    },
    {
      icon: RiBarChartLine,
      title: "Data-Driven Execution",
      description:
        "We base decisions on actionable insights and performance metrics, ensuring every move we make is optimized for maximum ROI.",
    },
    {
      icon: RiShakeHandsLine,
      title: "Transparent Collaboration",
      description:
        "We believe in open communication and real-time reporting, so you’re never left guessing. We’re a partner, not just a service provider.",
    },
    {
      icon: RiComputerLine,
      title: "Relentless Innovation",
      description:
        "In a fast-paced industry, standing still is not an option. We test new strategies, adopt cutting-edge tools, and constantly refine our approach to stay ahead of the competition.",
    },
  ];
  return (
    <main className="space-y-20 sm:space-y-40 w-full">
      <motion.section
        id="home"
        className="min-h-[80vh] relative flex flex-col justify-center items-center space-y-5 sm:space-y-6 "
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
          className="absolute top-0 left-0 w-full h-[90vh] object-cover "
        >
          <source src="/4408477.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <motion.div
          className="flex flex-col space-y-6 items-center relative z-10 pt-44"
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
        <motion.div
          className="space-y-4 w-full lg:w-1/2 block md:sticky top-20 lg:top-80"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-purple-200 to-blue-300 bg-clip-text tracking-tight text-transparent font-bold drop-shadow-lg mt-32"
            variants={childVariants}
          >
            Your Getaway to Infinite Possibilities
          </motion.h1>
          <motion.p
            className="text-gray-200 text-sm sm:text-base lg:text-lg mb-4 drop-shadow-md max-w-md"
            variants={childVariants}
          >
            We help brands optimize their digital presence and maximize revenue
            through advanced marketing strategies.
          </motion.p>
          <motion.button
            className="px-4 py-2 bg-[rgba(23,37,84,0.9)] text-white cursor-pointer rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300 text-sm sm:text-base"
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
              className="w-full max-w-[500px] bg-[rgba(23,37,84,0.6)] rounded-xl p-4 sm:p-5 transition-shadow duration-200 flex flex-col justify-between items-start relative overflow-hidden mx-auto space-y-3 hover:shadow-blue-500/80 hover:shadow-2xl hover:border hover:border-blue-800 hover:text-blue-500 description"
              variants={cardVariants}
              whileHover="hover"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(74,36,157,0.1)] via-[rgba(23,37,84,0.1)] to-[rgba(147,51,234,0.1)] opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl" />
              <img
                src={item.subtitle}
                alt={item.company_name}
                className="w-20"
              />
              <motion.div
                className="relative z-10 font-semibold rounded-md inline-block px-2 sm:px-3 py-1 text-xs sm:text-2xl hover:drop-shadow-md "
                variants={childVariants}
              >
                <p>{item.company_name}</p>
              </motion.div>
              <motion.div
                className="relative z-10 rounded-xl max-w-[90%] space-y-2 sm:space-y-3 p-3"
                variants={childVariants}
              >
                <p className="text-sm w-full text-white shadow-none  drop-shadow-none">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
      <section
        id="process"
        className="min-h-screen p-6 sm:p-10 flex items-center justify-center"
      >
        <motion.div
          className="max-w-[1650px] mx-auto flex flex-col space-y-5 items-center"
          variants={containerVariants}
        >
          <motion.p
            className="text-center text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-200 to-blue-300 bg-clip-text tracking-tight text-transparent"
            variants={childVariants}
          >
            VestraX is the proven e-commerce growth partner for Sports apparel &
            equipment brands ready to power past 8 figures
          </motion.p>
          <motion.div variants={childVariants}>
            <motion.button
              className="px-6 py-4 bg-black text-white rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow duration-300 cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Book Your Free Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </section>
      <motion.section
        id="about"
        className="min-h-screen p-6 sm:p-10 z-50 opacity-100"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="max-w-[1650px] mx-auto flex flex-col md:flex-row gap-8 mt-32"
          variants={containerVariants}
        >
          <motion.div
            className="w-full md:w-1/2 bg-gray-200 h-64 md:h-auto"
            variants={childVariants}
          >
            <img src="" alt="" />
          </motion.div>
          <motion.div className="w-full md:w-1/3" variants={containerVariants}>
            <motion.h4
              className="text-xl font-semibold mb-2"
              variants={childVariants}
            >
              About VestraX
            </motion.h4>
            <motion.p className="font-medium mb-4 " variants={childVariants}>
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
        id="philasophy"
        className="p-6 sm:p-10 mt-96 "
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-center mt-56"
          variants={childVariants}
        >
          Our Work Philosophy
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {work.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className={`flex flex-col items-center text-center p-4`}
                variants={childVariants}
              >
                <Icon className="text-4xl  mb-4" />
                <h2 className="text-lg font-bold  mb-2">{item.title}</h2>
                <p className="text-sm ">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
      <motion.section
        id="faq"
        className="min-h-screen max-w-[800px] flex flex-col justify-center mx-auto space-y-6  text-white p-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
      >
        <h1 className="text-center text-4xl font-bold text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-lg text-gray-400 font-medium">
          Everything you need to know about our services
        </p>
        <Accordion type="single" collapsible className="w-full space-y-4">
          <AccordionItem
            value="item-1"
            className="border border-gray-500 px-5 py-3 rounded-lg bg-transparent"
          >
            <AccordionTrigger className="cursor-pointer text-lg font-semibold text-white transition-colors flex justify-between items-center w-full">
              How does AI enhance marketing effectiveness?
              <span className="accordion-arrow" />
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 mt-2">
              Our advanced AI algorithms process massive datasets to refine
              campaign targeting, craft personalized messaging, and optimize
              delivery timing. This drives higher ROI, reduces customer
              acquisition costs, and maximizes overall campaign impact.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="border border-gray-500 px-5 py-3 rounded-lg bg-transparent"
          >
            <AccordionTrigger className="cursor-pointer text-lg font-semibold text-white transition-colors flex justify-between items-center w-full">
              What sets your agency apart from the competition?
              <span className="accordion-arrow" />
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 mt-2">
              We’re uniquely focused on fitness and recovery brands, blending
              deep industry knowledge with cutting-edge AI-driven strategies.
              This combination delivers measurable outcomes and fuels long-term,
              sustainable growth for our clients.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="border border-gray-500 px-5 py-3 rounded-lg bg-transparent"
          >
            <AccordionTrigger className="cursor-pointer text-lg font-semibold text-white transition-colors flex justify-between items-center w-full">
              When can we expect to see tangible results?
              <span className="accordion-arrow" />
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 mt-2">
              Many clients notice early improvements within the first 30 days.
              However, substantial, data-driven results typically emerge within
              3 months as our strategies fully take effect and adapt to your
              goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="border border-gray-500 px-5 py-3 rounded-lg bg-transparent"
          >
            <AccordionTrigger className="cursor-pointer text-lg font-semibold text-white transition-colors flex justify-between items-center w-full">
              Do you offer guaranteed results?
              <span className="accordion-arrow" />
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 mt-2">
              While we cannot guarantee specific outcomes due to market
              variables, our data-driven approach and proven strategies are
              designed to maximize your success. We work closely with you to set
              realistic goals and deliver measurable progress.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="border border-gray-500 px-5 py-3 rounded-lg bg-transparent"
          >
            <AccordionTrigger className="cursor-pointer text-lg font-semibold text-white transition-colors flex justify-between items-center w-full">
              What’s your pricing structure?
              <span className="accordion-arrow" />
            </AccordionTrigger>
            <AccordionContent className="text-gray-300 mt-2">
              Our pricing is tailored to your specific needs and goals. We offer
              flexible plans, including monthly retainers and project-based
              fees, ensuring you get the best value for your investment. Contact
              us for a personalized quote.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </motion.section>
    </main>
  );
};

export default Home;
