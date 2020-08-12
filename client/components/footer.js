import React from 'react'
import {Grid, Typography, Container} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    width: '100%',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  },
  copyright: {
    marginBottom: 20
  }
}))

export const Footer = () => {
  const classes = useStyles()

  return (
    <Grid className={classes.root} xs={12} direction="column">
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            className={classes.copyright}
            gutterBottom
          >
            {'©'}
            {new Date().getFullYear()} COCO FUSUMA
          </Typography>
          <Typography variant="body2" align="center" gutterBottom>
            MY ACCOUNT | FAQ | PRIVACY
          </Typography>
        </Container>
      </footer>
    </Grid>
  )
}

export default Footer
