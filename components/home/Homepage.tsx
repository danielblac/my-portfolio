import Image from "next/image";
import Link from "next/link";

export default function Homepage() {
  return (
    <main className="pt-5 lg:pt-10 pb-20 xxl:pb-24 xxl:pt-16">
      <div className="px-2 xs:px-4 lg:home lg:px-0 lg:grid lg:w-max lg:gap-x-4 lg:mx-auto">
        <h1 className="text-4xl xs:text-5xl lg:self-start lg:justify-self-start lg:text-6xl lg:ml-10 lg:pt-5 xl:text-7xl xl:pt-0 xl:pb-7 xxl:ml-28">
          Hi, I am <strong className="block py-2">Daniel Egboro</strong>
        </h1>
        <p className="relative font-champ px-4 text-xl bg-primary py-1 inline-block my-1 xs:ml-3 md:text-2xl  lg:-left-4 lg:my-0 mb-4 lg:mb-0 lg:ml-0 lg:home-subtitle lg:self-start lg:col-span-full lg:row-start-2 lg:text-right lg:py-3 lg:px-0 lg:pr-14 lg:font-semibold lg:-mt-10 xl:pr-24 xxl:pr-32 xl:ml-auto">
          Front-End Developer
        </p>
        <div className="w-full lg:home-img lg:min-w-16 lg:relative lg:z-10">
          <Image
            className="w-64 xs:ml-3 sm:w-96 lg:w-80 lg:scale-115 lg:ml-5 xxl:scale-135 xxl:ml-12"
            src="/image/dan-profile.jpg"
            alt="daniel-egboro"
            width={300}
            height={2886}
          />
        </div>
        <div className="my-skills lg:ml-16 xxl:ml-4"></div>
        <div className="lg:ml-auto mt-6 xs:ml-3 lg:-mt-3 bg-primary lg:bg-inherit max-w-40 border-3 border-primary px-6 py-3.5 h-14 rounded-md hover:bg-primary">
          <Link
            href="/files/Egboro_Daniel_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </Link>
        </div>
      </div>
      <div className="w-[90%] xl:w-[80%] xxl:w-[70%] mx-auto mt-10 lg:mt-14">
        <h3 className="font-champ text-3xl">About</h3>
        <div>
          <p className="mt-4">
            As a frontend developer with over four years of experience, I am
            passionate about creating beautiful, intuitive, and responsive
            websites and apps that are delightful to use. I have expertise in
            various programming languages, frameworks, and libraries, such as
            Next.js, React, Typescript, Styled Components, Tailwind CSS,
            Material UI, Bootstrap, SASS and many other npm packages.
          </p>
          <p className="mt-6">
            For the past months I worked as a dedicated Software Engineer at
            Thrillers Travels, I have had the opportunity to single-handedly
            design the frontend of a cutting-edge real estate website.
            Leveraging my skills in Next JS, React, TypeScript, Styled
            Component, Material UI, Google Maps API and some other packages, I
            created a responsive and user-friendly interface that enhances the
            user experience. My commitment to quality and attention to detail
            has allowed me to deliver a high-performing product that would
            certainly exceed client expectations.
          </p>
          <p className="mt-6">
            From July 2022 to January 2024, I worked as a frontend developer
            team lead at Talosmart, a company that provides innovative solutions
            for clients across different industries. I was responsible for
            assigning tasks and supervising other frontend developers in all
            company projects, handling weekly presentations to clients, managing
            the company's github repository, debugging existing projects, and
            writing clean and dry code. I also contributed to the design and
            development of several projects, using my skills in responsive web
            design and debugging to ensure customer satisfaction and quality
            standards. I am a team player who seeks to proffer solutions to
            professional challenges, utilizing my interpersonal skills and
            excellent time management. I am also a strategic thinker with a
            result-oriented personality, able to manage multiple projects with a
            positive attitude and achieve team objectives.
          </p>
        </div>
      </div>
      <div className="w-[90%] xl:w-[80%] xxl:w-[70%] mx-auto mt-10">
        <h3 className="font-champ text-3xl">My Skills</h3>
        <div className="grid grid-cols-3 text-sm gap-x-1 gap-y-2 xs:gap-3 md:gap-x-1 mt-6 md:mt-4 lg:gap-5 lg:text-lg lg:pt-1 lg:flex lg:flex-wrap xl:text-xl">
          <div className="skill">NextJS</div>
          <div className="skill">TypeScript</div>
          <div className="skill">React</div>
          <div className="skill">JavaScript</div>
          <div className="skill">Styled Component</div>
          <div className="skill">Tailwind CSS</div>
          <div className="skill">Material UI</div>
          <div className="skill">Sass</div>
          <div className="skill">React Bootstrap</div>
          <div className="skill">CSS</div>
          <div className="skill">HTML</div>
        </div>
      </div>
    </main>
  );
}
