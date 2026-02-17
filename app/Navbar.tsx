'use client'
import { usePathname } from 'next/navigation';
import Link from 'next/link'
import { FaBug } from "react-icons/fa";
function Navbar() {
  const currentPath = usePathname()

    const navItems = [
        { name: "Dashboard", href: "/" },
        { name: "Issues", href: "/issues" },
    ]

    
  return (
    <nav className='flex space-x-8 border-b px-6 py-4 mb-6 items-center justify-between'>
        <Link href="/"><FaBug /></Link>
       <ul className='flex space-x-6'>
        {navItems.map(links =>
         <Link 
         key={links.name} 
         className={` ${links.href === currentPath? 'text-green-400' : 'text-zinc-500' } hover:text-white transition-colors`}
            href={links.href}>{links.name}</Link>)}
       </ul>
       
    </nav>
  )
}

export default Navbar
