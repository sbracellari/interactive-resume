import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Toolbar from '@material-ui/core/Toolbar'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  appbar: {
    boxShadow: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    padding: '0px 50px'
  },
  button: {
    textTransform: 'none',
    fontFamily: 'Rokkit',
    borderRadius: 0
  }
}))

export default function Header() {
  const classes = useStyles()

  return (
    <div>
      <AppBar className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <Button 
            className={classes.button}
            onClick={() => window.scrollTo(0, 0)}
          >
            home
          </Button>
          <Button 
            className={classes.button}
            onClick={() => window.scrollTo(0, 1045)}            
            >
            about me
          </Button>
          <Button 
            className={classes.button}
            onClick={() => window.scrollTo(0, 2090)}
          >
            education
          </Button>
          <Button 
            className={classes.button}
            onClick={() => window.scrollTo(0, 3135)}  
          >
            technical skills
          </Button>
          <Button 
            className={classes.button}
            onClick={() => window.scrollTo(0, 4180)}
          >
            research
          </Button>
          <Button className={classes.button}>
            software projects
          </Button>
          <Button className={classes.button}>
            experience
          </Button>
          <Button className={classes.button}>
            contact
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}