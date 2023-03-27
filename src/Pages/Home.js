import React from 'react'
import Layout from '../Components/Layout'
import Intro from '../Components/Intro'
//import Movies from '../Components/Movies'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'

function Home() {
  return (
    <Layout>
        <Intro />
        <Skills />
        <Projects />
        {/* <Movies /> */}
    </Layout>
  )
}

export default Home