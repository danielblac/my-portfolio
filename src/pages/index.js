import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio | Home</title>
      </Head>
      <main className='pb-20 pt-5 px-2 xs:px-4 md:home md:px-0 md:grid md:w-max md:gap-x-4 md:mx-auto lg:pt-10 xxl:pb-24 xxl:pt-16'>
        <h1 className="text-4xl xs:text-5xl md:self-start md:justify-self-start md:pt-10 lg:text-6xl lg:ml-10 lg:pt-5 xl:text-7xl xl:pt-0 xl:pb-7 xxl:ml-28">
          Hi, I am <strong className='block py-2'>Daniel Egboro</strong>
        </h1>          
        <p className="relative px-4 text-xl bg-primary py-1 font-roboto inline-block my-1 xs:ml-3 md:text-2xl  md:-left-4 md:my-0 mb-4 md:mb-0 md:ml-0 md:home-subtitle md:self-start md:col-span-full md:row-start-2 md:text-right md:py-3 md:px-0 md:pr-14 md:font-semibold lg:text-3xl lg:-mt-10 xl:text-4xl xl:pr-24 xxl:pr-32">Front-End Developer</p>
        <div className='w-full md:home-img md:min-w-16 md:relative md:z-10'>
          <Image 
            className="w-64 xs:ml-3 md:ml-0 sm:w-96 lg:w-80 lg:scale-115 lg:ml-5 xxl:scale-135 xxl:ml-12" 
            src="/image/dan-profile.jpg" 
            alt="daniel-egboro" 
            width={300}
            height={2886}        
          />        
        </div>
        <div className="my-skills lg:ml-16 xxl:ml-4">
          <h3 className="font-bold text-xl ml-3 py-4 md:text-2xl md:pt-2 md:pb-3 lg:text-3xl lg:pt-14 lg:text-center xl:text-4xl xl:pt-20 xxl:pt-16">My Skills</h3>
          <div className='grid grid-cols-3 text-sm gap-x-1 gap-y-2 xs:gap-3 md:gap-x-1 md:-mr-10 md:-ml-3 lg:gap-3 lg:text-lg lg:pt-1 lg:flex lg:flex-wrap lg:-mr-96 lg:ml-0 xl:text-2xl xl:-mr-120 xxl:-mr-140'>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>            
            <div className="skill">JavaScript</div>
            <div className="skill">TypeScript</div>  
            <div className="skill">React</div>
            <div className="skill">NextJS</div>            
            <div className="skill">Tailwind CSS</div>        
            <div className="skill">Sass</div>        
            <div className="skill">React-Bootstrap</div>        
          </div>
        </div>
        <p className="text-justify tracking-wide md:max-w-medium md:self-start md:justify-self-start  pt-5 md:pt-0 md:ml-9 md:-mt-3 lg:max-w-sm lg:ml-12 lg:-mt-12 lg:text-lg xl:text-xl xl:max-w-lg xl:-mt-5 xxl:max-w-xl xxl:ml-28">
          I am a versatile frontend developer based in Lagos, Nigeria. I have a bachelors degree in Engineering from Niger Delta University. I love creating beautiful, intuitive and responsive apps that are delightful to use.
        </p>
      </main>
    </>
  )
}
