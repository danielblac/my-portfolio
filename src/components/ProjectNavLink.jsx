import Link from "next/link"
import { useRouter } from "next/router"


export default function ProjectNavLink({href, children, ...props}) {
    const { asPath } = useRouter();

    const isActive = href === asPath || href === props.as;

  return (
    <Link href={href}  {...props} className={`${isActive ? 'bg-primary sm:rounded-md sm:px-2.5 md:px-4 sm:pb-2.5 sm:pt-1.5' : ""}`}>
        {children}
    </Link>
  )
}