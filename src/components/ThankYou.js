import React from 'react'

import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  container: {
    textAlign: 'center',
    marginTop: 50
  },
  title: {
    fontSize: 35,
    fontFamily: 'Rokkit',
    paddingBottom: 50,
    marginTop: 10
  },
  subheader: {
    fontSize: 16,
    fontFamily: 'Rokkit',
    marginBottom: 50
  }
}))

export default function ThankYou() {
  const classes = useStyles()

  return (
      <div className={classes.container}>
        <Fade
          in={true} 
          timeout={5000} 
        >
          <div>
            <Typography className={classes.subheader}>
              Thank you for visiting my site! I hope you enjoyed the read!
            </Typography>
          </div>
        </Fade>
      </div>
  )
}