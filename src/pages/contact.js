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
      <div className="pb-14 pt-5 px-2 xs:px-4">
        <h3 className='font-bold text-xl sm:text-2xl'>Contact Me</h3>
          <div className="contact-details pt-3 xs:pt-6 sm:pt-8 flex flex-col items-center">
            <h2 className='text-3xl xs:text-5xl sm:text-6xl text-center font-bold leading-relaxed xs:leading-relaxed sm:leading-relaxed'>I'd love very much to hear from you...</h2>
            <p className='font-mono text-sm xs:text-lg sm:text-xl italic py-1 xs:py-2'>Feel free to contact me on 👇</p>      
            <div className="social-icons w-10/12 sm:w-full text-md xs:text-2xl sm:text-3xl grid justify-center gap-7 xs:gap-9 sm:gap-12 my-5 xs:my-9 sm:my-12 sm:flex flex-wrap">
              <Link href="tel:+2348165044450"  className="contact-links"><FaMobileAlt /> Call me</Link>
              <Link href="mailto:daniel_blac@yahoo.com" className="contact-links"><FaEnvelope /> Send a Mail</Link>
              <Link href="https://linkedin.com/in/daniel-egboro-ebipamowei" target='_blank' rel="noopener noreferrer" className="contact-links"><FaLinkedin /> LinkedIn</Link>
              <Link href="https://twitter.com/danielblacyaho1" target='_blank' rel="noopener noreferrer" className="contact-links"><FaTwitter /> Twitter</Link>
              <Link href="https://github.com/danielblac" target='_blank' rel="noopener noreferrer" className="contact-links"><FaGithub /> GitHub</Link>
            </div>
        </div>
      </div>
    </>
  )
}