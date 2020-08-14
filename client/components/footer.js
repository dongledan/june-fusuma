import React from 'react'
import {Link} from 'react-router-dom'
import {
  Grid,
  Typography,
  Container,
  ListItem,
  ListItemText,
  List,
  TextField,
  Button
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    marginBottom: 20,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    border: 'solid',
    borderColor: '#eaeaea'
  },
  copyright: {
    marginBottom: 5,
    marginTop: 30
  },
  list: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
    justifyContent: 'center',
    marginBottom: 40
  },
  margin: {
    margin: theme.spacing(1)
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10
  },
  button: {
    backgroundColor: '#444',
    borderRadius: 50,
    color: '#f2f2f2',
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 17,
    paddingRight: 17,
    letterSpacing: 2,
    fontWeight: '100',
    width: '19ch',
    marginBottom: 40
  },
  fixed: {
    position: 'fixed',
    bottom: 5,
    right: 10
  }
}))

export const Footer = () => {
  const classes = useStyles()

  return (
    <Grid xs={12} className={classes.root} direction="column">
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Grid xs={12}>
            <Typography variant="body2" gutterBottom style={{marginTop: 40}}>
              ── JUN FUSUMA POETRY SLAM NEWSLETTER
            </Typography>
            <Typography variant="body2" gutterBottom>
              Sign up to be notified of new product releases and restocks, and
              occasionally receive poetry from Jun Fusuma at 4 AM.
            </Typography>
          </Grid>
          <form className={classes.form} noValidate autoComplete="off">
            <TextField
              inputProps={{
                min: 0,
                style: {
                  textAlign: 'start',
                  marginLeft: 20,
                  marginRight: 20,
                  fontSize: 14
                }
              }}
              placeholder="YOUR EMAIL ADDRESS"
              id="outlined-basic"
              variant="outlined"
              className={classes.form}
            />
            <Button color="primary" className={classes.button}>
              SUBSCRIBE
            </Button>
          </form>
        </Container>
      </footer>
      <Typography
        variant="body2"
        align="center"
        color="textSecondary"
        className={classes.copyright}
      >
        {'© '}
        {new Date().getFullYear()} COCO FUSUMA
      </Typography>
      <List className={classes.list}>
        {['MY ACCOUNT', 'FAQ', 'ABOUT', 'PRIVACY'].map((text, index) => (
          <Link
            to={`/${text.toLowerCase()}`}
            key={text}
            style={{color: '#b28b5e'}}
          >
            <ListItem>
              <ListItemText
                primary={<Typography variant="caption">{text}</Typography>}
              />
            </ListItem>
          </Link>
        ))}
        <a className={classes.fixed} href="#">
          <KeyboardArrowUpIcon
            style={{
              fontSize: 30,
              border: 'solid',
              borderWidth: 2,
              borderRadius: 100,
              color: '#888'
            }}
          />
        </a>
      </List>
    </Grid>
  )
}

export default Footer
