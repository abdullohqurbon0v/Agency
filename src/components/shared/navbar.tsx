import { motion, Variants } from "framer-motion";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Menu } from "lucide-react";

const navItemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

const navContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const buttonContainerVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay: 0.6,
    },
  },
};

const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [isSheetOpen, setIsSheetOpen] = useState<boolean>(false);

  const navItems: string[] = ["Home", "Services", "Process", "About", "FAQ"];
  const hrefs: string[] = navItems.map(
    (item) => `#${item.toLowerCase().replace(" ", "-")}`
  );

  const handleNavClick = (href: string): void => {
    setActiveLink(href);
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Section with href ${href} not found`);
    }
    setIsSheetOpen(false);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition: number = window.scrollY + window.innerHeight / 2;
      for (const href of hrefs) {
        const section = document.querySelector(href);
        if (section instanceof HTMLElement) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveLink(href);
            break;
          }
        }
      }
      if (window.scrollY === 0) {
        setActiveLink("");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hrefs]);

  return (
    <div className="fixed  bg-transparent top-0 left-0 w-full z-50 pt-5 px-5 ">
      <motion.header
        className="border rounded-xl py-4 px-5 bg-transparent flex justify-between items-center shadow-lg backdrop-blur-sm bg-opacity-80"
        initial={{ y: -30 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.p
          className="text-2xl font-semibold tracking-wider"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img src={"/logo.png"} alt="Logo" className="w-32" />
        </motion.p>
        <motion.nav
          className="hidden md:flex space-x-7 items-center"
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item: string, index: number) => {
            const href: string = `#${item.toLowerCase().replace(" ", "-")}`;
            return (
              <motion.a
                key={item}
                href={href}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  handleNavClick(href);
                }}
                variants={navItemVariants}
                custom={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`${
                  activeLink === href ? "font-bold" : ""
                } transition-colors duration-300`}
              >
                {item}
              </motion.a>
            );
          })}
          <motion.div variants={buttonContainerVariants}>
            <Button className="shadow-md hover:shadow-lg transition-shadow">
              Get A Demo
            </Button>
          </motion.div>
          <motion.div
            variants={buttonContainerVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          ></motion.div>
        </motion.nav>
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden cursor-pointer"
            >
              <Menu className="h-6 w-6 " />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[250px] sm:w-[300px]">
            <nav className="flex flex-col space-y-4 mt-6 px-3">
              {navItems.map((item: string) => {
                const href: string = `#${item.toLowerCase().replace(" ", "-")}`;
                return (
                  <a
                    key={item}
                    href={href}
                    onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                      e.preventDefault();
                      handleNavClick(href);
                    }}
                    className={`text-lg ${
                      activeLink === href ? "font-bold" : ""
                    } transition-colors duration-300`}
                  >
                    {item}
                  </a>
                );
              })}
              <Button className="shadow-md hover:shadow-lg transition-shadow">
                Get A Demo
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </motion.header>
    </div>
  );
};

export default Navbar;
