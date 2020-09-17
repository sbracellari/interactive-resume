import React, { useState, useEffect } from 'react'

import IconButton from '@material-ui/core/IconButton'
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward'
import AppBar from '@material-ui/core/AppBar'
import Slide from '@material-ui/core/Slide'
import Tooltip from '@material-ui/core/Tooltip'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() => ({
  appbar: {
    boxShadow: 'none',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    width: '10%',
    bottom: 0,
    top: 'auto',
    marginBottom: 20
  },
}))

export default function ScrollButton() {
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
       <Slide direction='left' in={trigger} timeout={500}>
        <AppBar className={classes.appbar} >
          <div>
            <Tooltip title="Go to top of page" placement="left">
              <IconButton onClick={() => window.scrollTo(0, 0)}>
                <ArrowUpwardIcon />
              </IconButton>
            </Tooltip>
          </div>
        </AppBar>
      </Slide>

    </div>

  )
}