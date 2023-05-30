import Link from "next/link"
import { useRouter } from "next/router"


export default function NavLink({href, children, ...props}) {
    const { asPath } = useRouter();

    const isActive = href === asPath || href === props.as;

  return (
    <Link href={href}  {...props} className={`${isActive ? 'border-r-3 border-primary md:text-secondary-200 border-design-200 pr-2 md:border-none md:bg-primary md:rounded-md md:px-4 md:pb-2.5 md:pt-1.5' : ""}`}>
        {children}
    </Link>
  )
}