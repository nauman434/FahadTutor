import React from 'react'
import Container from './Cotainer'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu } from 'lucide-react'

//create array of objects with name and link
const navLinks = [
    {
        name: "Home",
        link: '/'
    },
    {
        name: "About Us",
        link: '/about'
    },
    {
        name: "Classes",
        link: '/classes'
    },
    {
        name: "Course",
        link: '/course'
    },
    {
        name: "Test Prep",
        link: '/test-prep'
    },
    {
        name: "Job",
        link: '/jobs'
    },
]

const Navbar = () => {
    return (
        <nav className='bg-background-paper py-6'>
            <Container className='flex justify-between items-center'>
                <div className='flex items-center gap-10'>
                    <div>
                        <Link href={'/'}>
                            <h2 className='text-2xl font-bold font-garamond'>Fahad Tut<span className='text-accent-yellow'>O</span>r</h2>
                        </Link>
                    </div>
                    <div className='lg:flex hidden'>
                        <ul className='flex items-center gap-6'>
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.link} className='hover:font-bold transition-all duration-75 text-muted-text hover:text-primary-dark'>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='flex gap-5'>
                    <div className='md:flex hidden gap-5'>
                        <Button className='w-[132px] bg-primary-dark rounded-[8px]'>Call Us Now</Button>
                        <Button className='w-[90px] bg-transparent border-b-[3px] border-r-[3px] border-t-[1px] border-l-[1px]  border-primary-dark
                     hover:bg-primary-dark text-primary-dark hover:text-white'>Login</Button>
                    </div>
                    <div className='lg:hidden flex'>
                        <div className='flex gap-[10px] items-center cursor-pointer group'>
                            <div className='flex flex-col gap-[10px]'>
                                <div className='w-[30px] h-[2px] rounded-full bg-primary transition-transform duration-300 ease-in-out group-hover:-translate-y-1 ' />
                                <div className='w-[30px] h-[2px] rounded-full bg-primary transition-transform duration-300 ease-in-out group-hover:translate-y-1 ' />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </nav >
    )
}

export default Navbar