import React from 'react';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from "react-intl";
import { Box, Typography} from '@mui/material';

const Styles = () => ({
  error: {
    textAlign: 'center',
    marginTop: '100px'
  }
})

const ErrorCard = ({ classes }) => {
  return (
    <Box className={classes.error}>
      <Typography variant="h3">
        <FormattedMessage id="app.ERROR" />
      </Typography>
    </Box>
  )
}

export default withStyles(Styles)(ErrorCard)
