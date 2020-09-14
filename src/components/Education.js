import React , { useState, useEffect } from 'react'

import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: 'url(' + require('../img/light.jpg') + ')',
    backgroundPosition: 'top center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '110vh',
    margin: '10px -10px -10px -10px',
    backgroundColor: '#d3d3d3',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  container: {
    margin: 20,
    display: 'flex',
    width: '50%',
    flexDirection: 'column',
    height: '70vh',
    padding: '30px 30px 30px 30px',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  main: {
    fontSize: 16,
    fontFamily: 'Rokkit',
    padding: '0px 30px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
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
  const [transition, set_transition] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 1500 && window.scrollY <= 2500) {
        set_transition(true)
      } else {
        set_transition(false)
      }
    })
  }, [])

  return (
<div className={classes.root}>
      <div className={classes.container}>
       <Slide 
        in={transition} 
        timeout={1500} 
        direction='left'
      >
        <Typography className={classes.header}>
          I'm currently a senior at Oakland University studying Computer Science.
          I have a GPA of 3.84 and I'm expected to graduate in May of 2021.
        </Typography>
      </Slide>
      <Slide 
        in={transition} 
        timeout={2000} 
        direction='left'
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
                I've received Dean's List Recognition for all of my years at Oakland
              </Typography>
            </ListItem>
          </List>
        </div>
      </Slide>
      <Slide 
        in={transition} 
        timeout={2500} 
        direction='left'
      >
        <Typography className={classes.main}>
          I'm also planning on doing my Master's in Computer Science at Oakland University as well!
        </Typography>
      </Slide>
      </div>
      </div>
  )
}