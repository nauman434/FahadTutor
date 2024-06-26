
import Container from '@/components/Cotainer'
import { Button } from '@/components/ui/button'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const LearnQuran = () => {
    return (
        <section 
            className='bg-primary-dark w-full h-[233px] mt-[80px] relative' 
            style={{ backgroundImage: `url('/Quran.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <Container className='flex justify-between'>
                <div className='py-8 flex flex-col gap-4 justify-center'>
                    <div>
                        <div className='flex items-center gap-4'>
                            <div className='flex items-center gap-1'>
                                <Star className='text-accent-yellow fill-accent-yellow' />
                                <Star className='text-accent-yellow fill-accent-yellow' />
                                <Star className='text-accent-yellow fill-accent-yellow' />
                                <Star className='text-accent-yellow fill-accent-yellow' />
                                <Star className='text-accent-yellow fill-accent-yellow' />
                            </div>
                            <p className='text-accent-yellow'>4.7 out of 5 (4523 Reviews)</p>
                        </div>
                        <div>
                            <h2 className='text-[24px] font-light text-white'>
                                Another service by <span className='font-garamond text-[46px] font-bold'>Fahad Tut<span className='text-accent-yellow'>O</span>r</span>
                            </h2>
                        </div>
                    </div>
                    <div>
                        <Button className='w-[137px] bg-transparent border-b-[3px] border-r-[3px] border-t-[1px] border-l-[1px] border-accent-yellow hover:bg-accent-yellow text-accent-yellow hover:text-white'>Learn Quran</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default LearnQuran
