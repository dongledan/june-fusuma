import React from 'react'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  copyright: {
    padding: 16
  }
}))

export const Copyright = () => {
  const classes = useStyles()
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      className={classes.copyright}
    >
      {'©'}
      {new Date().getFullYear()} COCO FUSUMA
    </Typography>
  )
}
