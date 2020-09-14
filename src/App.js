import React from 'react'
import Home from './components/Home'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import TechnicalSkills from './components/TechnicalSkills'
import Research from './components/Research'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'hidden',
    margin: -10
  }
}))

export default function App() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Home />
      <AboutMe />
      <Education />
      <TechnicalSkills />
      <Research />
    </div>
  )
}