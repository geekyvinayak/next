import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
   <>
   <h1>Welcome to react project</h1>
   <Link href="/user">User?</Link><Link href="/user/new">New User?</Link>
   </>
  )
}
