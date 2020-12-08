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
    width: '65%',
  },
  main: {
    fontSize: 16,
    fontFamily: 'Rokkit',
    padding: 10,
    textAlign: 'center',
    marginBottom: 50,
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    backgroundImage: 'url(' + require('../img/swiss-cheese-leaf.jpg') + ')',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    height: '400px',
    width: '35%',
    margin: 10,
  },
}))

export default function AboutMe() {
  const classes = useStyles()

  return (
    <div id='about-me' className={classes.root}>
      <Fade in={true} timeout={3000}>
        <div className={classes.img} />
      </Fade>
      <div className={classes.container}>
        <Fade in={true} timeout={2500}>
          <Typography className={classes.main}>
            Some of my favorite things to do in my free time are to draw, paint, play piano, and
            garden. I especially love succulents and tropical plants.
          </Typography>
        </Fade>
        <Fade in={true} timeout={3000}>
          <Typography className={classes.main}>
            Web development and design is a great fit for me, as it combines two of my favorite
            things: writing code and the aesthetics and relaxation that being creative provides.
          </Typography>
        </Fade>
        <Fade in={true} timeout={3500}>
          <Typography className={classes.main}>
            Though I do love web/frontend development, that's not the only area I'm interested in! I
            also enjoy backend and full stack development. My strong suits are Java, JavaScript, and
            Python, but I have experience with other languages too! Machine learning is also an
            interest of mine, and I'm currently working on an undergraduate thesis about big data
            anonymization.
          </Typography>
        </Fade>
      </div>
    </div>
  )
}
