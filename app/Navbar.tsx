import React from 'react'
import Link from 'next/link'
import { FaBug } from "react-icons/fa";
function Navbar() {
    const navItems = [
        { name: "Dashboard", href: "/" },
        { name: "Issues", href: "/issues" },
    ]
  return (
    <nav className='flex space-x-8 border-b px-6 py-4 mb-6 items-center justify-between'>
        <Link href="/"><FaBug /></Link>
       <ul className='flex space-x-6'>
        {navItems.map(links => <Link className='text-zinc-500 hover:text-white transition-colors' key={links.name} href={links.href}>{links.name}</Link>)}
       </ul>
    </nav>
  )
}

export default Navbar
