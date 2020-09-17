import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import Tooltip from '@material-ui/core/Tooltip'
import Slide from '@material-ui/core/Slide'

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
  sidebar: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxShadow: 'none',
    marginTop: 200,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
}))

const MediaBarButtons = () => {
  return (
    <>
      <Tooltip title="Linkedin" placement="right">
        <IconButton
          href='https://www.linkedin.com/in/sbracellari/'
          rel="noopener noreferrer"
          target="_blank"
        > 
           <LinkedInIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="GitHub" placement="right">
        <IconButton
          href='https://github.com/sbracellari/'
          rel="noopener noreferrer"
          target="_blank"
        > 
           <GitHubIcon />
        </IconButton>
      </Tooltip>
    </>
  )
}

export default function MediaBar() {
  const classes = useStyles()

  return (
    <div>
      <Slide direction='right' in={true} timeout={500}>
        <AppBar className={classes.sidebar}>
          <div className={classes.container}>
            <MediaBarButtons classes={classes} />
          </div>
        </AppBar>
      </Slide>
    </div>
  )
}