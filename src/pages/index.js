import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='pb-20 pt-5 px-4'>
      <h1 className="home-title title text-5xl">
        Hi, I am <strong className='block py-2'>Daniel Egboro</strong>
      </h1>          
      <p className="home-subtitle text-xl bg-primary py-1 px-4 font-roboto inline-block my-1 mb-4 ml-3">Front-End Developer</p>
      <div className='w-full'>
        <Image 
          className="w-64 ml-3" 
          src="/image/dan-profile.jpg" 
          alt="daniel-egboro" 
          width={2577}
          height={2886}        
        />        
      </div>
      <div className="my-skills tracki">
        <h3 className="text-xl ml-3 py-4">My Skills</h3>
        <div className='grid grid-cols-3 text-sm gap-3'>
          <div className="skill">HTML</div>
          <div className="skill">CSS</div>
          <div className="skill">Tailwind CSS</div>
          <div className="skill">JavaScript</div>
          <div className="skill">React</div>
          <div className="skill">NextJS</div>
          <div className="skill">TypeScript</div>          
        </div>
      </div>
      <p className="description text-justify pt-5 tracking-wide">
          I am a versatile frontend developer based in Lagos, Nigeria. I have a bachelors degree in Engineering from Niger Delta University. I love creating beautiful, intuitive and responsive apps that are delightful to use.
      </p>
    </main>
  )
}
