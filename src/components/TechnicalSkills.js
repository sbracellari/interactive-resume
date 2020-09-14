import React, { useState, useEffect } from 'react'

import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(' + require('../img/potted-plant.png') + ')',
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '110vh',
    margin: '10px -10px -10px -10px',
    backgroundColor: '#d3d3d3',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    margin: 20,
    width: '40%',
    display: 'flex',
    flexDirection: 'column',
    height: '70vh',
    padding: '30px 30px 30px 100px',
    justifyContent: 'space-evenly'
  },
  main: {
    fontSize: 14,
    fontFamily: 'Rokkit',
    padding: '0px 30px',
    textAlign: 'center'
  }
}))

export default function TechnicalSkills() {
  const classes = useStyles()
  const [transition, set_transition] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 2500 && window.scrollY <= 3500) {
        set_transition(true)
      } else {
        set_transition(false)
      }
    })
  }, [])

  return (
    <div className={classes.root}>
      <div className={classes.container}>
       <Slide 
        in={transition} 
        timeout={1500} 
        direction='right'
      >
        <Typography className={classes.main}>
          I've also acquired quite a few techincal skills throughout my time studying
          at Oakland University, as well as my job at Oakland University's University
          Technology Services.
        </Typography>
      </Slide>
      <Slide 
        in={transition} 
        timeout={2000} 
        direction='right'
      >
        <Typography className={classes.main}>
          The programming/web languages I know, ordered by proficiency level, are Java,
          JavaScript, HTML, CSS, SQL, Python, C++, and C. The first four I've become 
          proficient in through my job, and the last four I've learned from exposure through various
          class projects.
        </Typography>
      </Slide>
      <Slide 
        in={transition} 
        timeout={2500} 
        direction='right'
      >
        <Typography className={classes.main}>
          The frameworks and libraries that I'm familiar with are ReactJS (what this very 
          website is written in!), SpringBoot, Psycopg2, React Native, and Selenium. Again,
          The first two were due to exposure from my job, and the rest I've learned throughout
          my studies at Oakland.
        </Typography>
      </Slide>
      <Slide 
        in={transition} 
        timeout={2500} 
        direction='right'
      >
        <Typography className={classes.main}>
          Finally, the software and tools that I've worked with are Git, Vim,
          Visual Studio Code, LaTeX, Microsoft Word, Microsoft Excel, Microsoft Powerpoint,
          MicroSoft Office generally, and IntelliJ.

          Vim, Git, and VS Code are tools I was exposed to through my job and I use them
          daily for both my work at UTS and my classwork for Oakland. The rest of these tools
          I have come to know and/or use throughout the years.
        </Typography>
      </Slide>
      </div>
    </div>
  )
}