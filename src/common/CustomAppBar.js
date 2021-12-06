import React from 'react';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from "react-intl";
import { Box, AppBar, Toolbar, IconButton, Button, Typography } from '@mui/material';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const Styles = () => ({
  appBarRoot: {
    padding: '0 8%'
  },
  select: {
    fontWeight: 600
  }
})
export const CustomAppBar = ({ classes, onChange }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar classes={{ root: classes.appBarRoot }} position="static">
        <Toolbar disableGutters>
          <IconButton onClick={() => onChange('')}>
            <HomeRoundedIcon color="primary" />
          </IconButton>
          <Box sx={{ flexGrow: 1 }}>
            <Button variant="text" onClick={() => onChange('select')}>
              <Typography variant="body1" className={classes.select}>
                <FormattedMessage id="appBar.SELECT" />
              </Typography>
            </Button>
          </Box>
          <AccountCircleRoundedIcon color="primary" />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default withStyles(Styles)(CustomAppBar);
