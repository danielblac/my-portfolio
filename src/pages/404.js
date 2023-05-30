import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    /* setTimeout(() => {
      router.push('/')
    }, 3000) */
  }, [router])

  return (
    <div className='text-center flex items-center flex-col my-16 h-full'>
      <h1 className='font-bold text-4xl xs:text-5xl pt-10 lg:text-6xl pb-5'>Ooooooops....</h1>
      <h2 className='pb-3 text-2xl md:text-3xl lg:text-4xl'>That page cannot be found</h2>
      <p className='pb-3 text-xl md:text-2xl lg:text-3xl'>
        Go back to <Link className='text-btn underline' href='/'>Home</Link>
      </p>
    </div>
  )
}
