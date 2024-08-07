import { useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>
      

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
       <div className="flex flex-col laptop:flex-row laptop:mt-20 mt-10">
        <div className="laptop:w-1/4 flex justify-center items-center order-1 laptop:order-2 mt-5 laptop:mt-0">
          <div className="relative group">
            <img 
              src="/prog_pic.jpeg" 
              alt="Manya Imran" 
              className="rounded-full shadow-lg max-w-full h-auto w-80 h-80 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6"
            />
            <div className="absolute inset-0 rounded-full border-4 border-white transition-all duration-500 group-hover:border-blue-500 group-hover:shadow-blue-500 group-hover:shadow-md"></div>
          </div>
        </div>

        <div className="laptop:w-3/4 order-2 laptop:order-1">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h3
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h3>
            <h3
              ref={textThree}
              className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-1 text-bold w-full laptop:w-3/5"
            >
              {data.headerTaglineThree}
            </h3>
            <h3
              ref={textFour}
              className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-1 text-bold w-full laptop:w-3/5"
            >
              {data.headerTaglineFour}
            </h3>
          </div>
          <Socials className="mt-2 laptop:mt-5" />
        </div>
      </div>


        {/* <div className="laptop:mt-20 mt-10 flex">
          <div className="w-3/4">
            <div className="mt-5">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>
              <h3
                ref={textTwo}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h3>
              <h3
                ref={textThree}
                className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-1 text-bold w-full laptop:w-3/5"
              >
                {data.headerTaglineThree}
              </h3>
              <h3
                ref={textFour}
                className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-1 text-bold w-full laptop:w-3/5"
              >
                {data.headerTaglineFour}
              </h3>
            </div>
            <Socials className="mt-2 laptop:mt-5" />
          </div>
          {/* <div className="w-1/4 flex justify-center items-center ml-[-3cm]">
            <div className="relative group">
              <img 
                src="/prog_pic.jpeg" 
                alt="Manya Imran" 
                className="rounded-full shadow-lg max-w-full h-auto w-80 h-80 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6"
              />
              <div className="absolute inset-0 rounded-full border-4 border-white transition-all duration-500 group-hover:border-blue-500 group-hover:shadow-blue-500 group-hover:shadow-md"></div>
            </div>
          </div> 
          <div className="relative group hidden sm:block">
            <img 
              src="/prog_pic.jpeg" 
              alt="Manya Imran" 
              className="rounded-full shadow-lg max-w-full h-auto w-80 h-80 transition-transform duration-500 transform group-hover:scale-110 group-hover:rotate-6"
            />
            <div className="absolute inset-0 rounded-full border-4 border-white transition-all duration-500 group-hover:border-blue-500 group-hover:shadow-blue-500 group-hover:shadow-md"></div>
          </div>
         
        </div> */}

        {/* <div className="laptop:mt-20 mt-10 flex">
          <div className="mt-5">
            <h1
              ref={textOne}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-4/5 mob:w-full laptop:w-4/5"
            >
              {data.headerTaglineOne}
            </h1>
            <h3
              ref={textTwo}
              className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 text-bold w-full laptop:w-4/5"
            >
              {data.headerTaglineTwo}
            </h3>
            <h3
              ref={textThree}
              className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-1 text-bold w-full laptop:w-3/5"
            >
              {data.headerTaglineThree}
            </h3>
            <h3
              ref={textFour}
              className="text-xl tablet:text-3xl laptop:text-3xl laptopl:text-4xl p-1 tablet:p-1 text-bold w-full laptop:w-3/5"
            >
              {data.headerTaglineFour}
            </h3>
          </div>

          <Socials className="mt-2 laptop:mt-5" />
        </div> */}
        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-2xl text-bold">Projects</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
          <h1 className="tablet:m-10 text-2xl text-bold">Services</h1>
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard
                key={index}
                name={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={aboutRef}>
          <h1 className="tablet:m-10 text-2xl text-bold">About Me</h1>
          <p className="tablet:mx-10 mt-2 text-lg laptop:text-2xl w-full laptop:w-4/5 text-left">
            {data.aboutpara}
          </p>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}
