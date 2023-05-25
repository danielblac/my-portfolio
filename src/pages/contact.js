import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMobileAlt  } from 'react-icons/fa'

export default function Contact() {
  
  return (
    <div className="pb-20 pt-5 px-4">
      <h3 className='font-bold text-xl'>Contact Me</h3>
        <div className="contact-details pt-12 flex flex-col items-center">
          <h2 className='text-5xl text-center font-bold leading-relaxed'>I'd love very much to hear from you...</h2>
          <p className='font-mono text-lg italic py-4'>Feel free to contact me on 👇</p>      
          <div className="social-icons w-10/12 text-2xl grid justify-center gap-12 my-12">
            <Link href="tel:+2348165044450"  className="contact-links"><FaMobileAlt /> Call me</Link>
            <Link href="mailto:daniel_blac@yahoo.com" className="contact-links"><FaEnvelope /> Send a Mail</Link>
            <Link href="https://linkedin.com/in/daniel-egboro-ebipamowei" target='_blank' rel="noopener noreferrer" className="contact-links"><FaLinkedin /> LinkedIn</Link>
            <Link href="https://twitter.com/danielblacyaho1" target='_blank' rel="noopener noreferrer" className="contact-links"><FaTwitter /> Twitter</Link>
            <Link href="https://github.com/danielblac" target='_blank' rel="noopener noreferrer" className="contact-links"><FaGithub /> GitHub</Link>
          </div>
      </div>
    </div>
  )
}