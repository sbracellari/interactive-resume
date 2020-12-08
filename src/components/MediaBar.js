import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import GitHubIcon from '@material-ui/icons/GitHub'
import IconButton from '@material-ui/core/IconButton'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import Slide from '@material-ui/core/Slide'
import Tooltip from '@material-ui/core/Tooltip'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  sidebar: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    boxShadow: 'none',
    marginTop: 100,
    zIndex: 0,
    paddingLeft: 10,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  icon: {
    fontSize: 32,
  },
}))

const MediaBarButtons = ({ classes }) => {
  return (
    <>
      <Tooltip title='Linkedin' placement='right'>
        <IconButton
          href='https://www.linkedin.com/in/sbracellari/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <LinkedInIcon className={classes.icon} />
        </IconButton>
      </Tooltip>
      <Tooltip title='GitHub' placement='right'>
        <IconButton
          href='https://github.com/sbracellari/'
          rel='noopener noreferrer'
          target='_blank'
        >
          <GitHubIcon className={classes.icon} />
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
