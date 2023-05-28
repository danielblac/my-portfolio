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
      <main className='pb-24 pt-5 px-2 xs:px-4 md:home md:pt-14 md:grid md:w-max md:gap-x-4 md:mx-auto'>
        <h1 className="md:self-start md:justify-self-start md:pt-10 text-4xl xs:text-5xl">
          Hi, I am <strong className='block py-2'>Daniel Egboro</strong>
        </h1>          
        <p className="md:home-subtitle md:self-start md:col-span-full md:row-start-2 md:text-right relative md:-left-4 text-xl md:text-2xl bg-primary py-1 md:py-3 px-4 md:px-0 md:pr-14 md:font-semibold font-roboto inline-block my-1 md:my-0 mb-4 md:mb-0 xs:ml-3 md:ml-0">Front-End Developer</p>
        <div className='md:home-img w-full md:min-w-16 md:relative md:z-10'>
          <Image 
            className="w-64 xs:ml-3 md:ml-0" 
            src="/image/dan-profile.jpg" 
            alt="daniel-egboro" 
            width={2577}
            height={2886}        
          />        
        </div>
        <div className="my-skills">
          <h3 className="font-bold text-xl md:text-2xl ml-3 py-4 md:pt-2 md:pb-3">My Skills</h3>
          <div className='grid grid-cols-3 text-sm gap-x-1 gap-y-2 xs:gap-3 md:-mr-16 md:-ml-3'>
            <div className="skill">HTML</div>
            <div className="skill">CSS</div>            
            <div className="skill">JavaScript</div>
            <div className="skill">TypeScript</div>  
            <div className="skill">React</div>
            <div className="skill">NextJS</div>            
            <div className="skill">Tailwind CSS</div>        
          </div>
        </div>
        <p className="md:max-w-medium md:self-start md:justify-self-start text-justify pt-5 md:pt-0 md:ml-14 md:-mt-3 tracking-wide">
            I am a versatile frontend developer based in Lagos, Nigeria. I have a bachelors degree in Engineering from Niger Delta University. I love creating beautiful, intuitive and responsive apps that are delightful to use.
        </p>
      </main>
    </>
  )
}
