import React from 'react'
import {
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider
} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {Footer} from './footer'

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '92.5vh'
  },
  heading: {
    fontSize: theme.typography.pxToRem(18),
    fontWeight: theme.typography.fontWeightBold
  },
  title: {
    paddingTop: 10,
    paddingBottom: 20
  },
  subtitle: {
    paddingBottom: 15
  },
  text: {
    marginTop: 20,
    width: '50%'
  }
}))

export const FAQ = () => {
  const classes = useStyles()
  return (
    <Grid container component="main" className={classes.root} justify="center">
      <Grid xs={12}>
        <Typography align="center" variant="h3" className={classes.title}>
          JUNFUSUMAデブ
        </Typography>
        <Divider />
      </Grid>
      <Grid xs={6}>
        <Typography align="center" variant="h4" className={classes.subtitle}>
          FAQ
        </Typography>
        <Accordion defaultExpanded={true}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>PRODUCT</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">DO YOU EVER RESTOCK?</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body2">
              All JUNFUSUMA garments are limited and made in small batches.
              Assume anything sold out is gone FOREVER.
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="subtitle2">
              HOW DO YOUR PRODUCTS FIT?
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body2">
              This typical fit only applies to long torso, short legs
              individuals or "tall in the car" if you will. Typically, you
              should stay true to size (TTS) for a slim fit and size up for a
              relaxed fit. All JUNFUSUMA garments are generally going to be
              tapered Dorito fits (fancy we know), unless stated otherwise. To
              help you determine the right size, write the different sizes you
              might think you are and put them in a hat (preferably a top hat)
              and then blindly choose. You are most welcome.
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="subtitle2">
              HOW DO I TAKE CARE OF THE ART?
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body2">
              With tender love and affection. DO NOT WASH. Each stain, dirt,
              unidentifiable fluid just adds to the unique personality of the
              piece.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>SHIPPING</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="subtitle2">WHAT'S SHIPPING LIKE?</Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body2">
              All US domestic orders are shipped via USPS through a standard
              8-5/8 envelope. Multiple items will be shipped separately and
              randomly. This is to ensure shipping rates are low and calculated
              via shipping address, item classes, and quantities.
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="subtitle2">
              HOW LONG WILL MY SHIPMENT TAKE?
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body2">
              After you hit that sweet juicy order confirm, please allow 3-5
              business days for order processing. After that, you'll get it when
              you get it. A USPS tracking number will not be provided.
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="subtitle2">
              DO YOU SHIP INTERNATIONALLY?
            </Typography>
          </AccordionDetails>
          <AccordionDetails>
            <Typography variant="body2">
              Yes. Currently our online shop supports international shipping to
              over 2 different countries (US & Texas). Please fill out your
              shipping address on the checkout page to see if shipping is
              avilable. If it is unavailable, contact us and we'll work some
              magic.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
            disabled
          >
            <Typography className={classes.heading}>
              RETURNS & EXCHANGES
            </Typography>
          </AccordionSummary>
        </Accordion>
      </Grid>
      <Footer />
    </Grid>
  )
}

export default FAQ
