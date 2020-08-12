import React from 'react'
import {Typography, Divider} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  title: {
    paddingTop: 10,
    paddingBottom: 20
  }
}))

export const Header = () => {
  const classes = useStyles()
  return (
    <div>
      <Typography align="center" variant="h3" className={classes.title}>
        JUNFUSUMA
      </Typography>
      <Divider />
    </div>
  )
}

export default Header
