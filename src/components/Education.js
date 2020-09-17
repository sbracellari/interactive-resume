import React from 'react'

import Fade from '@material-ui/core/Fade'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50
  },
  main: {
    fontSize: 16,
    fontFamily: 'Rokkit',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 50
  },
  text: {
    fontFamily: 'Rokkit',
    fontSize: 14
  },
  list: {
    paddingTop: 50,
    width: '70%'
  },
  header: {
    fontSize: 16,
    fontFamily: 'Rokkit',
    padding: '0px 30px',
    width: '75%',
    textAlign: 'center'
  }
}))


export default function Education() {
  const classes = useStyles()

  return (
<div className={classes.root}>
      <div className={classes.container}>
       <Fade 
        in={true} 
        timeout={5000} 
      >
        <Typography className={classes.header}>
          I'm currently a senior at Oakland University studying Computer Science.
          I have a GPA of 3.84 and I'm expected to graduate in May of 2021.
        </Typography>
      </Fade>
      <Fade 
        in={true} 
        timeout={5000} 
      >
        <div className={classes.main}>
          During my time at OU, I've accumulated some academic talking points:
          <List className={classes.list}>
            <ListItem>
              <Typography
                classes={{
                  root: classes.text
                }}
              >
                I'm an OU Distinguished Scholar 11 (Yearly Scholarship)
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                classes={{
                  root: classes.text
                }}
              >
                I'm in the Honors College
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                classes={{
                  root: classes.text
                }}
              >
                I'm a part of the Alpha Lambda Delta (ALD) Honors Society
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                classes={{
                  root: classes.text
                }}
              >
                I've received a Certificate of Merit Award for Mathematics for my performance in Calculus II
              </Typography>
            </ListItem>
            <ListItem>
              <Typography
                classes={{
                  root: classes.text
                }}
              >
                I've received Dean's List Recognition for all of my years at Oakland so far
              </Typography>
            </ListItem>
          </List>
        </div>
      </Fade>
      <Fade 
        in={true} 
        timeout={5000} 
      >
        <Typography className={classes.main}>
          I'm also planning on doing my Master's in Computer Science at Oakland University as well!
        </Typography>
      </Fade>
      </div>
      </div>
  )
}