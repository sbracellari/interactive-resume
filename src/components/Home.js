import React, { useEffect, useState } from 'react'

import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(' + require('../img/leaf-in-hand.jpg') + ')',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '110vh',
    margin: -10,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  container: {
    margin: 20,
    width: '50%',
    display: 'flex'
  },
  title: {
    fontSize: 40,
    fontFamily: 'Rokkit'
  },
  subheader: {
    fontSize: 20,
    fontFamily: 'Rokkit'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  }
}))

export default function Home() {
  const classes = useStyles()
  const [transition, set_transition] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY <= 800) {
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
          timeout={1200} 
          direction='left'
        >
          <div className={classes.content}>
            <Typography className={classes.title}>
              Hi there!
            </Typography>
            <Typography className={classes.subheader}>
              My name is Samantha Bracellari. 
              Nice to see you here!
              Keep scrolling to learn more about me!
            </Typography>
          </div>
        </Slide>
      </div>
    </div>
  )
}