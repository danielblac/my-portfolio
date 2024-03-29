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
        <Link rel="noopener noreferrer" href='https://talosmart-monodone-frontend.vercel.app' target="_blank">
          <div className="bg-skill py-7 rounded-xl mb-5 flex flex-col px-1.5 items-center md:mb-8 md:flex-row md:gap-3 md:px-4 xl:px-8">
            <Image 
              className="w-96 h-64 rounded-xl mx-8 px-5 md:mx-0 md:px-0 md:w-80 md:h-72 lg:w-96 lg:h-80 xl:w-105 xl:h-80 xxl:max-w-none xxl:w-110"
              src='/image/monodome.png'
              alt="inshorens-landing-page"
              width={750}
              height={600}
            />
            <div className='pt-2 px-1.5 text-center md:text-left lg:px-4 lg:mr-4'>
              <h3 className='font-bold text-2xl mt-3 sm:text-3xl md:text-2xl md:mt-0 lg:text-3xl xl:text-4xl xxl:leading-normal'>Monodome</h3>
              <p className='text-sm tracking-wide pt-2 md:pt-1 xl:text-lg lg:pt-2'>This is a client app I built as Front-end Teamlead of a Team, The App was built with NextJs for the frontend and Laravel for the backend. I handled about 85% of the outcome of fronend for this project and I am responsible for weekly presentation to the clients about the progress of the project for the frontend and backend engineers.</p>
            </div>
          </div>
        </Link>
        <Link href='https://switch-hive-frontend.vercel.app' target="_blank" rel="noopener noreferrer">
          <div className="bg-skill py-7 rounded-xl mb-5 md:mb-8 flex flex-col px-1.5 items-center md:flex-row-reverse md:gap-3 md:px-4 xl:px-8">
            <Image 
              className="w-96 h-64 rounded-xl mx-8 px-5 md:mx-0 md:px-0 md:w-80 md:h-72 lg:w-96 lg:h-80 xl:w-105 xl:h-80 xxl:max-w-none xxl:w-110"
              src='/image/switchive.png'
              alt="inshorens-landing-page"
              width={750}
              height={600}
            />
            <div className='pt-2 px-1.5 text-center md:text-left lg:px-4 lg:mr-4'>
              <h3 className='font-bold text-2xl mt-3 sm:text-3xl md:text-2xl md:mt-0 lg:text-3xl xl:text-4xl xxl:text-5xl xxl:leading-normal'>Switchive</h3>
              <p className='text-sm tracking-wide pt-2 md:pt-1 xl:text-lg lg:pt-2'>This is a client app i built as Front-end Teamlead of a Team, The App was built with NextJs for the frontend and NodeJs for the backend, I built the App Layout, Landing Page and Gift-card Page, I am responsible for the supervision of delivery of the entire project as long as it concerns frontend and I am responsible for weekly presentation to the clients about the progress of the project for the frontend and backend engineers.</p>
            </div>
          </div>
        </Link>
        <Link rel="noopener noreferrer" href='https://next-basket-daniel-egboro.vercel.app' target="_blank">
          <div className="bg-skill py-7 rounded-xl mb-5 flex flex-col px-1.5 items-center md:mb-8 md:flex-row md:gap-3 md:px-4 xl:px-8">
            <Image 
              className="w-96 h-64 rounded-xl mx-8 px-5 md:mx-0 md:px-0 md:w-80 md:h-72 lg:w-96 lg:h-80 xl:w-105 xl:h-80 xxl:max-w-none xxl:w-110"
              src='/image/next-basket.png'
              alt="BAndage"
              width={750}
              height={600}
            />
            <div className='pt-2 px-1.5 text-center md:text-left lg:px-4 lg:mr-4'>
              <h3 className='font-bold text-2xl mt-3 sm:text-3xl md:text-2xl md:mt-0 lg:text-3xl xl:text-4xl xxl:leading-normal'>Bandage</h3>
              <p className='text-sm tracking-wide pt-2 md:pt-1 xl:text-lg lg:pt-2'>This is a test project i did to further elaborate my skills, Its a e-commerce website where you can order for products by adding to cart or save for later by adding to wishlist. The project was built using nextjs framework, material UI, React Bootstrap and SASS for styling, Authentication was done using Next-auth, You can login using credentials, your google account or your github account.</p>
            </div>
          </div>
        </Link>
        <Link href='https://www.split-delivery.com' target="_blank" rel="noopener noreferrer">
          <div className="bg-skill py-7 rounded-xl mb-5 flex flex-col px-1.5 items-center md:flex-row-reverse md:gap-3 md:px-4 xl:px-8">
            <Image 
              className="w-96 h-64 rounded-xl mx-8 px-5 md:mx-0 md:px-0 md:w-80 md:h-72 lg:w-96 lg:h-80 xl:w-105 xl:h-80 xxl:max-w-none xxl:w-110"
              src='/image/split-delivery.png'
              alt="split-delivery"
              width={750}
              height={600}
            />
            <div className='pt-2 px-1.5 text-center md:text-left lg:px-4 lg:mr-4'>
              <h3 className='font-bold text-2xl mt-3 sm:text-3xl md:text-2xl md:mt-0 lg:text-3xl xl:text-4xl xxl:text-5xl xxl:leading-normal'>Split Delivery</h3>
              <p className='text-sm tracking-wide pt-2 md:pt-1 xl:text-lg lg:pt-2'>This is a website i built for a client, It has a landing page and an admin panel, The admin panel has authentication which is did using next-auth, I worked on this project with a backend developer who worked on all the endpoints needed to fulfill the customer's requirements.</p>
            </div>
          </div>
        </Link>
        <Link rel="noopener noreferrer" href='https://daniel-inshorens-landingpage-l7cro656m-daniel-blac.vercel.app' target="_blank">
          <div className="bg-skill py-7 rounded-xl mb-5 flex flex-col px-1.5 items-center md:mb-8 md:flex-row md:gap-3 md:px-4 xl:px-8">
            <Image 
              className="w-96 h-64 rounded-xl mx-8 px-5 md:mx-0 md:px-0 md:w-80 md:h-72 lg:w-96 lg:h-80 xl:w-105 xl:h-80 xxl:max-w-none xxl:w-110"
              src='/image/inshorens.png'
              alt="inshorens-landing-page"
              width={750}
              height={600}
            />
            <div className='pt-2 px-1.5 text-center md:text-left lg:px-4 lg:mr-4'>
              <h3 className='font-bold text-2xl mt-3 sm:text-3xl md:text-2xl md:mt-0 lg:text-3xl xl:text-4xl xxl:leading-normal'>Inshorens Landing Page</h3>
              <p className='text-sm tracking-wide pt-2 md:pt-1 xl:text-lg lg:pt-2'>This is my frontend part of a website i built as part of a team for the Inshorens app project, Inshorens deals with the business of selling valuable gadgets at very affordabl price with flexible payment structure. I was solely resposible for delivering the frontend solution to this website.</p>
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
