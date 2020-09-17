import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import TechnicalSkills from './components/TechnicalSkills'
import Research from './components/Research'
import Experience from './components/Experience'
import SoftwareProjects from './components/SoftwareProjects'
import ScrollButton from './components/ScrollButton'
import Divider from '@material-ui/core/Divider'
import ThankYou from './components/ThankYou'
import { makeStyles } from '@material-ui/core/styles'
import MediaBar from './components/MediaBar'

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
  button: {

  }
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