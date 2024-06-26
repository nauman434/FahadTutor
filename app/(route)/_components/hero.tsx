
import Container from '@/components/Cotainer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <Container className='mt-5'>
            <section>
                <div className=' w-full flex flex-col lg:flex-row lg:gap-16 gap-4 mb-5'>
                    <h1 className='font-garamond font-bold sm:text-[80px] text-[48px] w-full lg:w-[687px] leading-[111%]'>
                        Find the best near you or online
                    </h1>

                    <div className='lg:mt-16 mt-4 w-full lg:w-[444px] relative'>
                        <div className='absolute lg:flex hidden  -top-20 -left-28'>
                            <Image src={'/arrow.svg'} width={122} height={84} alt='arrow' />
                        </div>
                        <h4 className='font-bold font-garamond'>Our Story</h4>
                        <p className='text-muted-text'>
                            Welcome to <span className='font-bold text-accent-yellow'> FAHAD Tutors Academy!</span>
                            Here we provide qualified home tutors and online tutors specializing in various subjects inside and outside Pakistan. We cater to the unique needs of students and prepare them for important entry-level exams for their bright futures.
                        </p>
                        <div className='flex gap-[10px] mt-[30px]'>
                            <Button className='w-[132px] border-button hover:bg-primary-dark hover:text-white'>
                                Find a Tutor
                            </Button>
                            <Button className='w-[183px] border-button hover:bg-primary-dark hover:text-white'>
                                Become a Teacher
                            </Button>
                        </div>
                    </div>
                </div>

                <Image src={'/hero-img.svg'} width={1199} height={438} alt='hero image' className='md:flex hidden'/>
            </section>
        </Container>
    )
}

export default Hero
