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
        <link rel="icon" href="/image/dan-profile.jpg" />
      </Head>
      <div className="pb-20 pt-4 xs:px-4 lg:pb-24">
        <Link rel="noopener noreferrer" href='https://daniel-inshorens-landingpage-l7cro656m-daniel-blac.vercel.app/about' target="_blank">
          <div className="bg-skill py-7 rounded-xl mb-5 flex flex-col px-1.5 items-center md:mb-8 md:flex-row md:gap-3 md:px-4 xl:px-8">
            <Image 
              className="w-96 h-64 rounded-xl mx-8 px-5 md:mx-0 md:px-0 md:w-80 md:h-72 lg:w-96 lg:h-80 xl:w-105 xl:h-96 xxl:max-w-none xxl:w-110 xxl:h-105"
              src='/image/inshorens.png'
              alt="inshorens-landing-page"
              width={750}
              height={600}
            />
            <div className='pt-2 px-1.5 text-center md:text-left lg:px-4 lg:mr-4'>
              <h3 className='font-bold text-2xl mt-3 sm:text-3xl md:text-2xl md:mt-0 lg:text-3xl xl:text-4xl xxl:leading-normal'>Inshorens Landing Page</h3>
              <p className='text-sm tracking-wide pt-2 md:pt-1 xl:text-lg lg:pt-2'>This is my frontend part of a website i built as part of a team for the Inshorens app project, Inshorens deals with the business of selling valuable gadgets at very affordabl price with flexible payment structure. I was solely resposible for delivering the frontend solution to this website</p>
            </div>
          </div>
        </Link>
        <Link href='https://daniel-movie-search-app.netlify.app' target="_blank" rel="noopener noreferrer">
          <div className="bg-skill py-7 rounded-xl mb-5 flex flex-col px-1.5 items-center md:flex-row-reverse md:gap-3 md:px-4 xl:px-8">
            <Image 
              className="w-96 h-64 rounded-xl mx-8 px-5 md:mx-0 md:px-0 md:w-80 md:h-72 lg:w-96 lg:h-80 xl:w-105 xl:h-96 xxl:max-w-none xxl:w-110 xxl:h-105"
              src='/image/movie-watchlist.png'
              alt="inshorens-landing-page"
              width={750}
              height={600}
            />
            <div className='pt-2 px-1.5 text-center md:text-left lg:px-4 lg:mr-4'>
              <h3 className='font-bold text-2xl mt-3 sm:text-3xl md:text-2xl md:mt-0 lg:text-3xl xl:text-4xl xxl:text-5xl xxl:leading-normal'>Movie Watchlist</h3>
              <p className='text-sm tracking-wide pt-2 md:pt-1 xl:text-lg lg:pt-2'>This Website allows you to search for the information of both known and unknown movies and save them on your watchlist which you can access any other time. Basically improves your movie search experience.</p>
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
