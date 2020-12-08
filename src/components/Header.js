import React, { useState, useEffect } from 'react'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Slide from '@material-ui/core/Slide'
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
    padding: '0px 50px',
  },
  button: {
    textTransform: 'none',
    fontFamily: 'Rokkit',
    borderRadius: 0,
  },
  sidebar: {
    width: '15%',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxShadow: 'none',
    marginTop: 30,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
}))

const AppbarButtons = ({ classes }) => {
  return (
    <>
      <Button
        className={classes.button}
        onClick={() => document.getElementById('about-me').scrollIntoView()}
      >
        about me
      </Button>
      <Button
        className={classes.button}
        onClick={() => document.getElementById('education').scrollIntoView()}
      >
        education
      </Button>
      <Button
        className={classes.button}
        onClick={() => document.getElementById('technical-skills').scrollIntoView()}
      >
        technical skills
      </Button>
      <Button
        className={classes.button}
        onClick={() => document.getElementById('research').scrollIntoView()}
      >
        research
      </Button>
      <Button
        className={classes.button}
        onClick={() => document.getElementById('software').scrollIntoView()}
      >
        software projects
      </Button>
      <Button
        className={classes.button}
        onClick={() => document.getElementById('experience').scrollIntoView()}
      >
        experience
      </Button>
    </>
  )
}

export default function Header() {
  const classes = useStyles()
  const [trigger, set_trigger] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 150) {
        set_trigger(true)
      } else {
        set_trigger(false)
      }
    })
  }, [])

  return (
    <div>
      <Slide direction='down' in={!trigger}>
        <AppBar className={classes.appbar}>
          <Toolbar className={classes.toolbar}>
            <AppbarButtons classes={classes} />
          </Toolbar>
        </AppBar>
      </Slide>
      <Slide direction='left' in={trigger} timeout={500}>
        <AppBar className={classes.sidebar}>
          <div className={classes.container}>
            <AppbarButtons classes={classes} />
          </div>
        </AppBar>
      </Slide>
    </div>
  )
}
