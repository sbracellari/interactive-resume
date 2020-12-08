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
  },
  main: {
    fontSize: 16,
    fontFamily: 'Rokkit',
    textAlign: 'center',
    marginBottom: 50,
    padding: '10px 10px 10px 20px',
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
}))

export default function SoftwareProjects() {
  const classes = useStyles()

  return (
    <div id='software' className={classes.container}>
      <Fade in={true} timeout={5000}>
        <Typography className={classes.main}>
          Between my job and my time studying at Oakland, I've worked on a handful of software
          projects. Below I've listed two of them in detail, and the rest I'll mention briefly.
        </Typography>
      </Fade>
      <Fade in={true} timeout={5000}>
        <Typography className={classes.main}>
          The first project I'd like to talk about is a project that I wrote with two other students
          in the database design course that I took in the winter 2020 semester at Oakland. It was a
          banking application that we we called SYB Bank (S, Y, and B being our last initials), and
          it had a ReactJS frontend and a RESTful Python backend that was connected to a MySQL
          database. The app mocked administrator view with login, client data modification, and
          transaction approval/denial features. It also mocked a client view with login, bank
          account creation/deletion, and transaction initiation features The project was written
          using Visual Studio Code and Vim, and managed with Git. You can{' '}
          <a
            href='https://github.com/sbracellari/SYB-Bank'
            target='_blank'
            rel='noopener noreferrer'
          >
            check it out on my GitHub
          </a>{' '}
          if you'd like.
        </Typography>
      </Fade>
      <Fade in={true} timeout={5000}>
        <Typography className={classes.main}>
          The next project is one that I worked on individually at my job at Oakland University's
          University Technology Services (UTS). I'll talk more about that in the next section. This
          project was called Financial Aid Soffit (a soffit is very similar to a web application),
          and it was originally built for the university's MySAIL website. It had a Java/SpringBoot
          backend, a ReactJS frontend, and was connected to an Oracle database. The Java backend was
          also RESTful and it authenticated using JWEs. This application was written to display
          students’ financial aid information in a clean and concise way while still providing
          necessary data. It was written using Visual Studio Code and Vim, and managed with Git. The
          open source version is{' '}
          <a
            href='https://github.com/sbracellari/financial-aid'
            target='_blank'
            rel='noopener noreferrer'
          >
            available on my GitHub
          </a>{' '}
          if you'd like to check it out.
        </Typography>
      </Fade>
      <Fade in={true} timeout={5000} direction='right'>
        <div className={classes.main}>
          I'll give a few brief details of the rest of the projects I've worked on:
          <List className={classes.list}>
            <ListItem>
              <ListItemText
                classes={{
                  primary: classes.text,
                }}
                primary={
                  <>
                    <a
                      href='https://github.com/sbracellari/CSI-2999'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Snowday Calculator
                    </a>{' '}
                    - group project written for my Sophomore Project course; it has a ReactJS
                    frontend and a Python backend
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                classes={{
                  primary: classes.text,
                }}
                primary={
                  <>
                    <a
                      href='https://github.com/sbracellari/BookMate'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      BookMate
                    </a>{' '}
                    - group project written for my Software Engineering course; it has a ReactJS
                    frontend, a Java/SpringBoot backend, and a PostgreSQL database connection
                  </>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemText
                classes={{
                  primary: classes.text,
                }}
                primary='My Details Soffit - individual project written through my job at UTS;
                it has a ReactJS frontend, a Java/SpringBoot backend, and an Oracle database connection'
              />
            </ListItem>
            <ListItem>
              <ListItemText
                classes={{
                  primary: classes.text,
                }}
                primary='Courses Soffit - individual project written through my job at UTS;
                it has a ReactJS frontend, a Java/SpringBoot backend, and an Oracle database connection'
              />
            </ListItem>
            <ListItem>
              <ListItemText
                classes={{
                  primary: classes.text,
                }}
                primary='I am also just now starting my senior capstone project, which is going to be
                an interactive chat bot called Buddy Bot. This project will have a ReactJS frontend,
                a Python backend (with a neural net!), and possibly some sort of database connection
                to act as a data repository.'
              />
            </ListItem>
          </List>
        </div>
      </Fade>
    </div>
  )
}
