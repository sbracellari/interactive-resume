import React from 'react'

import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center',
  },
  title: {
    fontSize: 35,
    fontFamily: 'Rokkit',
    paddingBottom: 50,
    marginTop: 10,
  },
  subheader: {
    fontSize: 16,
    fontFamily: 'Rokkit',
    marginBottom: 50,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default function Home() {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Fade in={true} timeout={2000}>
        <div className={classes.content}>
          <Typography className={classes.title}>Hi there!</Typography>
          <Typography className={classes.subheader}>
            My name is Samantha Bracellari. Nice to see you here! Keep scrolling to learn more about
            me!
          </Typography>
        </div>
      </Fade>
    </div>
  )
}
