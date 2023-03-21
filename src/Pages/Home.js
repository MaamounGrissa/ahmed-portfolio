import React from 'react'
import Layout from '../Components/Layout'
import Intro from '../Components/Intro'
import Movies from '../Components/Movies'

function Home() {
  return (
    <Layout>
        <Intro />
        <Movies />
    </Layout>
  )
}

export default Home