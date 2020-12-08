import React from 'react'

import Fade from '@material-ui/core/Fade'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
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
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Rokkit',
    fontSize: 14,
  },
  list: {
    paddingTop: 50,
    width: '70%',
  },
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  img: {
    backgroundImage: 'url(' + require('../img/web.jpg') + ')',
    backgroundPosition: 'bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    height: '400px',
    width: '35%',
    margin: 10,
  },
}))

export default function Experience() {
  const classes = useStyles()

  return (
    <div id='experience' className={classes.root}>
      <Fade in={true} timeout={5000}>
        <div className={classes.img} />
      </Fade>
      <div className={classes.container}>
        <Fade in={true} timeout={5000}>
          <Typography className={classes.main}>
            Since May of 2018, I've been working as a student full stack developer at Oakland
            University's University Technology Services (UTS).
          </Typography>
        </Fade>
        <Fade in={true} timeout={5000}>
          <div className={classes.main}>
            During my two and a half years at UTS, I've
            <List className={classes.list}>
              <ListItem>
                <ListItemText
                  classes={{
                    primary: classes.text,
                  }}
                  primary='Developed multiple production-ready, full stack web applications for the university’s student portal'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  classes={{
                    primary: classes.text,
                  }}
                  primary='Worked frequently with Java, JavaScript, and SQL'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  classes={{
                    primary: classes.text,
                  }}
                  primary='Been responsible for the scanning/patching of frontend and backend vulnerabilities in various applications'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  classes={{
                    primary: classes.text,
                  }}
                  primary='Collaborated with other students who worked with different aspects of the student portal'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  classes={{
                    primary: classes.text,
                  }}
                  primary='Aided in the development of training tools used to improve the onboarding process for new student developers'
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  classes={{
                    primary: classes.text,
                  }}
                  primary='Been responsible for providing any additional assistance to new students, as well as assigning tasks to them'
                />
              </ListItem>
            </List>
          </div>
        </Fade>
        <Fade in={true} timeout={5000}>
          <Typography className={classes.main}>
            I've really loved my job at UTS, and I'd love to find another full stack development job
            that allows me to grow and learn just as my position at UTS has.
          </Typography>
        </Fade>
      </div>
    </div>
  )
}
