import Container from '@/components/Cotainer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const MeetTeachers = () => {
    return (
        <section
            className='bg-primary-dark w-full h-[830px] mt-[80px] relative'
            style={{ backgroundImage: `url('/meet-teachers.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <Container className='flex flex-col items-center justify-center gap-8 h-full'>
                <h2 className='font-bold font-garamond text-[48px] text-primary-dark'>Meet our Tut<span className='text-accent-yellow'>O</span>rs</h2>
                <p className='text-muted-text w-[660px] text-center'>Priced For Students “The prices of getting help shouldn’t be pricey” FAHAD Tutors can give on-demand help on Hundreds of subjects, whenever you need. The Best Tuition Academy in Town</p>
                <Image src={'/arrow-down.svg'} width={29} height={94} alt='arrow-down' />
                <Button className='w-[183px] border-button hover:bg-primary-dark hover:text-white'>
                    Meet Our Teacher
                </Button>
            </Container>
        </section>
    )
}

export default MeetTeachers