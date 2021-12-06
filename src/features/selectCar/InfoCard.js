import React from 'react'
import { withStyles } from '@mui/styles';
import { FormattedMessage } from "react-intl";
import { Box, Typography, Button } from '@mui/material';

const Styles = theme => ({
  container: {
    minWidth: 300,
    padding: '50px 70px',
    [theme.breakpoints.down(480)]: {
      padding: '50px 20px',
    }
  },
  holder: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  data: {
    fontWeight: 600
  },
  confirm: {
    marginTop: 30,
    textAlign: 'center'
  }
})

const InfoCard = ({ data, classes, onConfirm, showConfirm }) => {
  return (
    <Box className={classes.container}>
      <Box className={classes.holder}>
        <Typography><FormattedMessage id="select.table.MAKE" />:</Typography>
        <Typography className={classes.data}>{data.make}</Typography>
      </Box>
      <Box className={classes.holder}>
        <Typography><FormattedMessage id="select.table.MODEL" />:</Typography>
        <Typography className={classes.data}>{data.model}</Typography>
      </Box>
      <Box className={classes.holder}>
        <Typography><FormattedMessage id="select.table.ENGINE_POWER_PS" />:</Typography>
        <Typography className={classes.data}>{data.enginePowerPS}</Typography>
      </Box>
      <Box className={classes.holder}>
        <Typography><FormattedMessage id="select.table.ENGINE_POWER_KV" />:</Typography>
        <Typography className={classes.data}>{data.enginePowerKW}</Typography>
      </Box>
      <Box className={classes.holder}>
        <Typography><FormattedMessage id="select.table.FUEL_TYPE" />:</Typography>
        <Typography className={classes.data}>{data.fuelType}</Typography>
      </Box>
      <Box className={classes.holder}>
        <Typography><FormattedMessage id="select.table.BODY_TYPE" />:</Typography>
        <Typography className={classes.data}>{data.bodyType}</Typography>
      </Box>
      <Box className={classes.holder}>
        <Typography><FormattedMessage id="select.table.ENGINE_CAPACITY" />:</Typography>
        <Typography className={classes.data}>{data.engineCapacity}</Typography>
      </Box>
      {showConfirm && <Box className={classes.confirm}>
        <Button variant="contained" onClick={onConfirm} >
          <FormattedMessage id="select.info.CONFIRM" />
        </Button>
      </Box>}
    </Box>
  )
}

export default withStyles(Styles)(InfoCard)