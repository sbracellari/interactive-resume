import React from 'react'

import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Experience from './components/Experience'
import Header from './components/Header'
import Home from './components/Home'
import MediaBar from './components/MediaBar'
import Research from './components/Research'
import ScrollButton from './components/ScrollButton'
import SoftwareProjects from './components/SoftwareProjects'
import TechnicalSkills from './components/TechnicalSkills'
import ThankYou from './components/ThankYou'

import Divider from '@material-ui/core/Divider'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(' + require('./img/white-wall.jpg') + ')',
    backgroundPosition: 'top center',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    height: 'auto',
    overflow: 'hidden',
    margin: -10,
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    width: '60%',
    backgroundColor: '#ebebeb',
    marginTop: 150,
    marginBottom: 20,
    padding: 20,
  },
}))

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <MediaBar />
      <div className={classes.container}>
        <Home />
        <Divider />
        <AboutMe />
        <Divider />
        <Education />
        <Divider />
        <TechnicalSkills />
        <Divider />
        <Research />
        <Divider />
        <SoftwareProjects />
        <Divider />
        <Experience />
        <Divider />
        <ThankYou />
      </div>
      <ScrollButton />
    </div>
  )
}
