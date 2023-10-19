import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMobileAlt  } from 'react-icons/fa'

export default function Contact() {
  
  return (
    <>
      <Head>
        <title>My Portfolio | Contact</title>
      </Head>
      <div className="pb-14 pt px-2 xs:px-4">
        <h3 className='font-bold text-xl sm:text-2xl lg:text-3xl xxl:text-4xl'>Contact Me</h3>
          <div className="contact-details flex flex-col items-center pt-3">
            <h2 className='text-3xl text-center font-bold leading-snug max-w-3xl xs:leading-snug xs:text-5xl sm:text-6xl sm:leading-snug xl:text-7xl xl:leading-snug xl:-mt-3'>I'd love very much to hear from you...</h2>
            <p className='font-mono pt-2 text-sm italic xs:text-lg sm:text-xl lg:pt-2 xl:text-2xl xl:pt-0'>Feel free to contact me on 👇</p>      
            <div className="social-icons w-10/12 text-md flex flex-col flex-wrap max-w-3xl justify-center gap-7 my-5 xs:my-9 xs:gap-9 xs:text-2xl sm:text-3xl sm:gap-12 md:flex-row md:w-full md:my-10 lg:font-semibold lg:text-4xl lg:gap-x-16 xl:gap-x-20 xl:gap-y-10">
              <Link href="tel:+2348165044450"  className="contact-links"><FaMobileAlt /> Call me</Link>
              <Link href="mailto:daniel_blac@yahoo.com" className="contact-links"><FaEnvelope /> Send a Mail</Link>
              <Link href="https://linkedin.com/in/daniel-egboro-ebipamowei" target='_blank' rel="noopener noreferrer" className="contact-links"><FaLinkedin /> LinkedIn</Link>
              <Link href="https://twitter.com/danie_blac" target='_blank' rel="noopener noreferrer" className="contact-links"><FaTwitter /> Twitter</Link>
              <Link href="https://github.com/danielblac" target='_blank' rel="noopener noreferrer" className="contact-links"><FaGithub /> GitHub</Link>
            </div>
        </div>
      </div>
    </>
  )
}