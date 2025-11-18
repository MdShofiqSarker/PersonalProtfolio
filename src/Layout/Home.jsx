import React from 'react'
import Banner from '../components/Banner'
import Projects from '../components/Projects'
import Testimonials from '../components/Testimonials'
import About from '../components/About'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <section id="banner">
        <Banner/>
      </section>
      
      <section id="projects">
        <Projects/>
      </section>

      <section id="testimonials">
        <Testimonials/>
      </section>

      <section id="about">
        <About/>
      </section>

      <section id="services">
        <Services/>
      </section>

      <section id="skills">
        <Skills/>
      </section>

      <section id="contact">
        <Contact/>
      </section>
    </div>
  )
}
