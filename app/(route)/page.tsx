import { Button } from '@/components/ui/button'
import React from 'react'
import Banner from './_components/banner'
import Hero from './_components/hero'
import LearnQuran from './_components/learn-quran'
import TutorsSubject from './_components/tutors-subject'
import MeetTeachers from './_components/meet-teachers'
import WhyUs from './_components/why-us'

const Home = () => {
  return (
    <section>
      <Banner />
      <Hero/>
      <LearnQuran/>
      <TutorsSubject/>
      <MeetTeachers/>
      <WhyUs/>
    </section>
  )
}

export default Home