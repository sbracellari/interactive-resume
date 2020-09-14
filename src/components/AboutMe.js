import React, { useState, useEffect } from 'react'

import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(' + require('../img/succulents.jpg') + ')',
    backgroundPosition: 'top center',
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
    fontSize: 16,
    fontFamily: 'Rokkit',
    padding: '0px 30px',
    textAlign: 'center'
  }
}))

export default function AboutMe() {
  const classes = useStyles()
  const [transition, set_transition] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 500 && window.scrollY <= 1500) {
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
          Some of my favorite things to do in my free time are 
          to draw, paint, play piano, and garden. I also love succulents,
          as you can probably see!
        </Typography>
      </Slide>
      <Slide 
        in={transition} 
        timeout={2000} 
        direction='right'
      >
        <Typography className={classes.main}>
          Web development and design is a great fit for me, as it combines two
          of my favorite things: writing code and the aesthetics and relaxation
          that being creative provides.
        </Typography>
      </Slide>
      <Slide 
        in={transition} 
        timeout={2500} 
        direction='right'
      >
        <Typography className={classes.main}>
          Though I do love web/frontend development, that's not the only area I'm interested
          in! I also enjoy backend and fullstack development. My strong suit is Java, but I also
          have some experience with Python. Machine learning is also
          an interest of mine, and I'm currently working on an undergraduate thesis about big data anonymization.
        </Typography>
      </Slide>
      </div>
    </div>
  )
}