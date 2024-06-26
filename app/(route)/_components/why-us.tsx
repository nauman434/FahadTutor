import Container from '@/components/Cotainer'
import InfoSection from '@/components/InfoSection'
import InfoSectionLeft from '@/components/InfoSectionLeft';
import React from 'react'

interface InfoSectionProps {
    imageUrl: string;
    title: string;
    listItems: string[];
    spanHeading: string;
    imagePosition?: 'right' | 'left';
  }

const WhyUs = () => {
    const teacherSelectionData: InfoSectionProps = {
        imageUrl: '/img-1.jpg',
        title: 'Teacher Selection and Quality',
        listItems: [
          'Highly Qualified Staff: Each teacher undergoes a rigorous educational background check.',
          'Certified and Verified: Every tutor is fully certified and 100% verified to ensure the highest quality of education.',
          'Subject and Experience Diversity: Tutors available for a range of subjects and experience levels, both home and online, locally and internationally.'
        ],
        spanHeading: 'Teacher Selection and Quality',
        imagePosition: 'right'
      };
    
      const academicSupportData: InfoSectionProps = {
        imageUrl: '/img-2.jpg',
        title: 'Comprehensive Academic Support',
        listItems: [
          'Exam Preparation: Specialized preparation for major tests including GRE, GMAT, SAT, and various university entrance exams.',
          'Global Reach: Offers online tutoring to students worldwide, with no geographical limitations.',
          'Homework Assistance: Tutors provide guidance to help students complete homework, fostering independent learning and timely submission.'
        ],
        spanHeading: 'Comprehensive Academic Support',
        imagePosition: 'left'
      };


    return (
        <Container className='mt-[80px]'>
            <section>
                <div className='flex items-start justify-center'>
                    <div className='relative w-[385] items-end flex justify-end'>
                        <h2 className='text-[48px] font-garamond font-bold'>Why Us?</h2>
                        <div className='w-[77px] h-[9px] rounded-full bg-accent-yellow absolute ' />
                    </div>
                </div>
                <div>
                    <InfoSection {...teacherSelectionData} />
                    <InfoSectionLeft {...academicSupportData} />
                </div>
            </section>
        </Container>
    )
}

export default WhyUs