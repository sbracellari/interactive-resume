import React from 'react'

import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 50,
    width: '65%'
  },
  main: {
    fontSize: 16,
    fontFamily: 'Rokkit',
    textAlign: 'center',
    marginBottom: 50,
    padding: '10px 10px 10px 20px'
  },
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    backgroundImage: 'url(' + require('../img/hello-world.png') + ')',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    height: '400px',
    width: '35%',
    margin: 10
  }
}))

export default function TechnicalSkills() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Fade in={true} timeout={4000}>
      <div className={classes.img} />
      </Fade>
      <div className={classes.container}>
       <Fade 
        in={true} 
        timeout={4000} 
      >
        <Typography className={classes.main}>
          I've also acquired quite a few techincal skills throughout my time studying
          at Oakland University, as well as my job at Oakland University's University
          Technology Services.
        </Typography>
      </Fade>
      <Fade 
        in={true} 
        timeout={4500} 
      >
        <Typography className={classes.main}>
          The programming/web languages I know, ordered by proficiency level, are Java,
          JavaScript, HTML, CSS, SQL, Python, C++, and C. The first four I've become 
          proficient in through my job, and the last four I've learned from exposure through various
          class projects.
        </Typography>
      </Fade>
      <Fade 
        in={true} 
        timeout={5000} 
      >
        <Typography className={classes.main}>
          The frameworks and libraries that I'm familiar with are ReactJS (what this very 
          website is written in!), SpringBoot, Psycopg2, React Native, and Selenium. Again,
          The first two were due to exposure from my job, and the rest I've learned throughout
          my studies at Oakland.
        </Typography>
      </Fade>
      <Fade 
        in={true} 
        timeout={5000} 
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
      </Fade>
      </div>
    </div>
  )
}