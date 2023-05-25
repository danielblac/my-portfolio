import Link from "next/link"
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="h-14 gap-3 justify-center items-center text-lg border-t border-primary absolute p-4 bottom-0 flex w-full">
      <p>© Daniel E.</p>
      <Link className="hover:scale-125" href="https://github.com/danielblac" target='_blank' rel="noopener noreferrer"><FaGithub /></Link>
      <Link className="hover:scale-125" href="https://linkedin.com/in/daniel-egboro-ebipamowei" target='_blank' rel="noopener noreferrer"><FaLinkedin /></Link>
      <Link className="hover:scale-125" href="https://twitter.com/danielblacyaho1" target='_blank' rel="noopener noreferrer"><FaTwitter /></Link>
    </footer>
  )
}