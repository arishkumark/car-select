import React from 'react';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from "react-intl";
import { Box, Card, Typography, List, ListItem,
  ListItemIcon, ListItemText, Button} from '@mui/material';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Styles = theme => ({
  bannerCardRoot: {
    borderRadius: 0,
    background: '#ffe24f',
    padding: '50px 8%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.down(480)]: {
      flexDirection: 'column-reverse',
      padding: '0 8% 30px'
    }
  },
  iconBox: {
    [theme.breakpoints.down(480)]: {
      textAlign: 'center',
    }
  },
  make: {
    fontWeight: 600,
    lineHeight: '60px',
    color: '#7e57c2'
  },
  change: {
    color: '#7e57c2',
    marginBottom: 20,
    [theme.breakpoints.down(480)]: {
      marginBottom: 0,
    }
  },
  car: {
    width: 300,
    height: 300,
    color: '#7e57c2'
  },
  listItemIcon: {
    minWidth: 36,
    color: '#7e57c2'
  },
  infoCard: {
    maxWidth: 950,
    margin: '40px auto',
    textAlign: 'center',
    [theme.breakpoints.down(480)]: {
      padding: '0 15px',
    }
  },
  desc: {
    margin: '20px 0'
  },
  listRoot: {
    margin: '30px 0',
    [theme.breakpoints.down(480)]: {
      margin: '0 0 20px',
    }
  }
})

const Dashboard = ({ classes, onChange }) => {
  return (
    <Box>
      <Card classes={{ root: classes.bannerCardRoot}}>
        <Box>
          <Typography variant="h3" className={classes.change}>
            <FormattedMessage id="dashboard.CHANGE_NOW" />
          </Typography>
          <Typography variant="h3" className={classes.make}>
            <FormattedMessage id="dashboard.DECIDE_NOW" />
          </Typography>
          <List classes={{ root: classes.listRoot }}>
            <ListItem disablePadding>
              <ListItemIcon classes={{ root: classes.listItemIcon}}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={<FormattedMessage id="dashboard.LIST_1" />} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon classes={{ root: classes.listItemIcon}}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={<FormattedMessage id="dashboard.LIST_2" />} />
            </ListItem>
            <ListItem disablePadding>
              <ListItemIcon classes={{ root: classes.listItemIcon}}>
                <CheckCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={<FormattedMessage id="dashboard.LIST_3" />} />
            </ListItem>
          </List>
          <Button variant="contained" onClick={() => onChange('select')}>
            <FormattedMessage id="dashboard.SELECT" />
          </Button>
        </Box>
        <Box className={classes.iconBox}>
          <DirectionsCarFilledOutlinedIcon className={classes.car} />
        </Box>
      </Card>
      <Card classes={{root: classes.infoCard }}>
        <Typography variant="h3">
          <FormattedMessage id="dashboard.TITLE" />
        </Typography>
        <Typography variant="h5" className={classes.desc}>
          <FormattedMessage id="dashboard.DESC" />
        </Typography>
      </Card>
    </Box>
  )
}

export default withStyles(Styles)(Dashboard);
