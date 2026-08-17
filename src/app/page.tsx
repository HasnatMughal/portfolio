"use client"

import Container from "@/components/Container";
import Image from "next/image";
import CardFeature from "@/components/CardFeature";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import ServiceCard from "@/components/ServiceCard";
import {motion} from "framer-motion"

export default function Home() {
  const services = [
    { number: "01", title: "Web Development", description: "Fast, scalable web applications built with React and Next.js." },
    { number: "02", title: "Full Stack Solutions", description: "End-to-end development from database to deployment." },
    { number: "03", title: "Landing Pages", description: "High-converting landing pages with clean copy and modern design." },
    { number: "04", title: "Copywriting", description: "Clear, compelling copy that communicates and converts." },
]
  const projects = [
    {
        title: "Murmur",
        description: "A full-stack social media platform with auth, likes, comments, trending posts and user profiles.",
        image: "/murmur.png",
        liveLink: "https://murmur-social.vercel.app",
        githubLink: "https://github.com/HasnatMughal/Murmur"
    },
    {
        title: "Reciply",
        description: "A full-stack recipe sharing app with image uploads, search, categories and user dashboards.",
        image: "/reciply.png",
        liveLink: "https://reciply-one.vercel.app",
        githubLink: "https://github.com/HasnatMughal/Reciply"
    },
    {
        title: "Jobify",
        description: "A job board with role-based auth, job posting, applications, CV upload and AI-powered resume analysis.",
        image: "/jobify.png",
        liveLink: "https://jobify-indol-gamma.vercel.app/",
        githubLink: "https://github.com/HasnatMughal/jobify"
    },
    {
        title: "Essence",
        description: "A Fullstack e-commerce store built with ReactJs, context api and Tailwind CSS with appwrite as a backend service.",
        image: "/essence.png",
        liveLink: "#",
        githubLink: "https://github.com/HasnatMughal",

    },
    {
    title: "GlacierTech",
    description: "A modern landing page built for a refrigeration company. Clean design, fast performance and fully responsive.",
    image: "/glaciertech.png",
    liveLink: "#",
    githubLink: "https://github.com/HasnatMughal"
}
]
  return (
    <div className="mt-10">
      <Container>
        <section className="h-full md:min-h-screen text-normal ">
          <motion.h1  initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }} className="text-6xl md:text-9xl font-semibold font-display uppercase text-center ">
            Explore My Portfolio
          </motion.h1>
          <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} transition={{duration:0.8}} className="md:lessmargin flex md:flex-row flex-col  justify-between">
              <img src="./hero.png" className="w-1/2 h-1/2 mx-auto  md:w-6/10 " alt="" />
 <div className="w-full flex items-center">
              <div className="flex flex-col items-center">
                <p className="text-lg md:text-xl uppercase text-center md:text-end">I am passionate about building SCALABLE & MODERN
WEB APPLICATIONS THAT STAND OUT. </p>

    <ul className="flex flex-col uppercase mt-15 w-full text-lg items-center md:items-end gap-4">
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>Typescript</li>
              <li>ReactJs</li>
              <li>NextJs</li>
              <li>Copywriting</li>
            </ul>
          </div>
           


              </div>
              
            </motion.div>
            
            <div className="mt-5 flex justify-center md:justify-end w-full"><Link href={"https://utfs.io/f/1sNLbqtigOlK9Uqa9oY3EIrvjyTHg7ZdL4CAeiQbR0mDfzcw"} className="border w-32 text-center hover:text-white hover:bg-black px-4 py-2 rounded-2xl">View CV</Link ><Link href={"#contact"} className="border hover:text-white hover:bg-black px-4 w-32 text-center py-2 rounded-2xl">Let's Talk</Link></div>
        </section>
        <motion.section initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
   className="flex md:flex-row flex-col md:items-center mt-5 md:gap-16 md:h-[60vh] md:justify-between">
          <h1 className="text-7xl uppercase text-center md:text-start font-display font-semibold ">About</h1>
          <p className="uppercase ">"I'm Hasnat Ahmed, a Full Stack Developer from Sialkot, Pakistan.

I build web applications that solve real problems — fast, clean, 
and ready to scale. From idea to deployment, I handle the full picture.
<br /><br />
What sets me apart? I also write copy. That means I don't just build 
your product — I help it communicate. Clear messaging, better conversions, 
stronger results.
<br /><br />

If you need something built that actually works — let's talk."</p>
        </motion.section>

        <motion.section initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
     className="md:h-[60vh]   mt-5 ">
        <div className="grid grid-rows-3 md:grid-cols-3">
          <CardFeature amount={"4+"} text={"deployed fullstack projects"}/>
          <CardFeature amount={"Satisfied"} text={"Clients"}/>
          <CardFeature amount={"2 years"} text={"Self taught developer"}/>
          </div>
        </motion.section>
        <motion.section initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
     className=" md:[60vh] ">
          <h1 className="text-7xl font-semibold text-center">Featured Projects</h1>
            <div className="grid   gap-2 md:grid-cols-3 mt-5">
              {projects && projects.map((project, index) => {
                return(
                  <li key={index}>

                    <ProjectCard title={project.title} description={project.description} liveLink={project.liveLink} image={project.image} githubLink={project.githubLink} />
                  </li>
                )
              })}
            </div>
        </motion.section>
        <motion.section initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }} className="md:min-h-screen mt-10">
          <h1 className="text-7xl font-semibold text-center">Services we provide</h1>
          {services && services.map((service:any, index:any) => {
            return(
              <li key={index} >
                <ServiceCard  title={service.title} number={service.number} description={service.description}/>
              </li>
            )
          })}
        </motion.section>

      </Container>
    </div>
  );
}
