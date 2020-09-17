import React from 'react'

import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 50,
    width: '65%'
  },
  main: {
    fontSize: 16,
    fontFamily: 'Rokkit',
    padding: 10,
    textAlign: 'center',
    marginBottom: 50
  },
  root: {
    display: 'flex',
    alignItems: 'center'
  },
  img: {
    backgroundImage: 'url(' + require('../img/data.jpg') + ')',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    height: '400px',
    width: '35%',
    margin: 10
  }
}))

export default function Research() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.container}>
       <Fade 
        in={true} 
        timeout={5000} 
      >
        <Typography className={classes.main}>
          Since I'm in the Honors College at OU, I'm currently working on an undergraduate
          thesis under a well respected professor of the Department of Mathematics.
        </Typography>
      </Fade>
      <Fade 
        in={true} 
        timeout={5000} 
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
      </Fade>
      </div>
      <Fade in={true} timeout={5000}>
        <div className={classes.img} />
      </Fade>
    </div>
  )
}