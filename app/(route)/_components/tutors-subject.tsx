import Container from '@/components/Cotainer'
import Link from 'next/link';
import React from 'react'

const subjectsData = [
    { subject: "English", totalTeachers: 3222 },
    { subject: "Math", totalTeachers: 5711 },
    { subject: "Chemistry", totalTeachers: 6625 },
    { subject: "Physics", totalTeachers: 6609 },
    { subject: "Accounting", totalTeachers: 9899 },
    { subject: "Online Quran", totalTeachers: 674 }
];

const TutorsSubject = () => {
    return (
        <Container className='mt-[80px]'>
            <section>
                <div className='flex items-start justify-center'>
                    <div className='relative w-[385px]'>
                        <h2 className='text-[48px] font-garamond font-bold'>Tutors By Subjects</h2>
                        <div className='w-[77px] h-[9px] rounded-full bg-accent-yellow absolute right-0 top-14' />
                    </div>
                </div>
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-[100px] gap-[50px] mt-[50px]'>
                    {subjectsData.map((item, index) => (
                        <Link href={'/'} key={index} className='p-5 border-[1px] border-[#E1E1E1] rounded-[10px] flex items-center gap-5 hover:border-accent-yellow hover:border-b-[6px] hover:border-r-[6px] hover:border-l-[1px] hover:border-t-[1px] transition-all duration-75'>
                            <div className='w-[118px] h-[118px] rounded-[20px] bg-primary-dark'>
                            </div>
                            <div>
                                <h4 className='font-garamond font-bold text-[40px]'>{item.totalTeachers}</h4>
                                <p className='text-lg text-muted-text'>{item.subject}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </Container>
    )
}

export default TutorsSubject