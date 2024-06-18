import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="h-14 gap-3 justify-center items-center text-lg border-t border-primary absolute p-4 bottom-0 flex w-full sm:text-xl lg:gap-6 lg:text-2xl xxl:gap-9 xxl:h-16">
      <p>© Daniel E.</p>
      <Link
        className="hover:scale-150 duration-[500ms]"
        href="https://github.com/danielblac"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </Link>
      <Link
        className="hover:scale-150 duration-[500ms]"
        href="https://linkedin.com/in/daniel-egboro-ebipamowei"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin />
      </Link>
      <Link
        className="hover:scale-150 duration-[500ms]"
        href="https://twitter.com/danie_blac"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter />
      </Link>
    </footer>
  );
}
