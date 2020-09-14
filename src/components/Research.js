import React, { useState, useEffect } from 'react'

import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(' + require('../img/rocks.jpg') + ')',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '110vh',
    margin: '10px -10px -10px -10px',
    backgroundColor: '#d3d3d3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    margin: 20,
    width: '70%',
    display: 'flex',
    flexDirection: 'column',
    height: '70vh',
    padding: '30px 30px 30px 100px',
    justifyContent: 'space-between'
  },
  main: {
    fontSize: 16,
    fontFamily: 'Rokkit',
    padding: '0px 30px',
    textAlign: 'center'
  }
}))

export default function Research() {
  const classes = useStyles()
  const [transition, set_transition] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 3500 && window.scrollY <= 4500) {
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
          Since I'm in the Honors College at OU, I'm currently working on an undergraduate
          thesis under a well respected professor of the Department of Mathematics.
        </Typography>
      </Slide>
      <Slide 
        in={transition} 
        timeout={2000} 
        direction='left'
      >
        <Typography className={classes.main}>
          I'm focusing on the anonymization of big data and its importance. To supplement
          my research, I'm utilizing {' '}
            <a
              href='https://github.com/google/differential-privacy/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Google's recently open sourced differential privacy tool
            </a>
         {' '} by running its provided differential privacy algorithms against a dataset that I generated, and
          presenting the results of the de-identified data in a college setting to
          drive how important it is to keep data anonymous.
        </Typography>
      </Slide>
      </div>
    </div>
  )
}