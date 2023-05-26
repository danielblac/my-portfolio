import Layout from "@/components/Layout";
import Head from 'next/head'
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <>    
      <Head>
        <title>My Portfolio | Projects</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/image/dan.jpg" />
      </Head>
      <div className="pb-14 pt-4 px-4">
        <Link rel="noopener noreferrer" href='https://daniel-inshorens-landingpage-l7cro656m-daniel-blac.vercel.app/about' target="_blank">
          <div className="flex flex-col pb-8 px-1.5 sm:mx-8 xl:mx-14 xl:my-6 md:flex-row-reverse md:gap-7  items-center">
            <Image 
              className="w-96 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-105 xl:h-105 xxl:w-125 xxl:h-125 rounded-lg"
              src='/image/inshorens.png'
              alt="inshorens-landing-page"
              width={750}
              height={600}
            />
            <div className='px-3 md:pr-4 lg:px-4 lg:mr-4'>
              <h3 className='font-bold text-center text-2xl md:text-2xl  mt-3 md:text-left md:mb-2 xxl:text-5xl xxl:leading-normal'>Inshorens Landing Page</h3>
              <p className='paragraph text-justify sm:text-justify md:text-left'>This is my frontend part of a website i built as part of a team for the Inshorens app project, Inshorens deals with the business of selling valuable gadgets at very affordabl price with flexible payment structure. I was solely resposible for delivering the frontend solution to this website</p>
            </div>
          </div>
        </Link>
        <Link href='https://daniel-inshorens-landingpage-l7cro656m-daniel-blac.vercel.app/about' target="_blank" rel="noopener noreferrer">
          <div className="flex flex-col pb-8 px-1.5 sm:mx-8 xl:mx-14 xl:my-6 md:flex-row-reverse md:gap-7  items-center">
            <Image 
              className="w-96 h-64 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-105 xl:h-105 xxl:w-125 xxl:h-125 rounded-lg"
              src='/image/movie-watchlist.png'
              alt="inshorens-landing-page"
              width={750}
              height={600}
            />
            <div className='px-3 md:pr-4 lg:px-4 lg:mr-4'>
              <h3 className='font-bold text-center text-2xl md:text-2xl  mt-3 md:text-left md:mb-2 xxl:text-5xl xxl:leading-normal'>Movie Watchlist</h3>
              <p className='paragraph text-justify sm:text-justify md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, fugiat. Expedita asperiores facere aliquid est iure veritatis facilis deleniti optio corrupti. Odit, rem nisi ratione possimus laborum placeat error aliquam!</p>
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

Projects.getLayout = function ProjectsPage(projects) {
  return (
    <>            
      <Layout criteria={false}>
        {projects}
      </Layout>
    </>
  )
}
