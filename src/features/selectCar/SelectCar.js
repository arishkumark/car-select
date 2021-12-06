import React, { useEffect, useState } from 'react';
import { withStyles } from '@mui/styles';
import { FormattedMessage } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { Box, Button, Autocomplete, TextField, Typography } from '@mui/material';
import { fetchMakes, fetchModels, fetchVehicle } from './selectCarSlice';
import CustomSnackBar from '../../common/CustomSnackBar';
import ErrorCard from '../../common/ErrorCard';
import CustomTable from './CustomTable';
import InfoCard from './InfoCard';

const Styles = theme => ({
  container: {
    maxWidth: 1000,
    margin: '50px auto',
    padding: '3%'
  },
  selectWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: 30
  },
  buttonContainer: {
    marginTop: 50
  },
  success: {
    textAlign: 'center',
    maxWidth: 700,
    margin: '40px auto',
    [theme.breakpoints.down(480)]: {
      padding: '0 20px',
    }
  },
  goBack: {
    marginTop: 30
  },
  brandAuto: {
    width: 500,
    marginBottom: '50px',
    [theme.breakpoints.down(480)]: {
      width: 'auto'
    }
  },
  modelAuto: {
    width: 500,
    [theme.breakpoints.down(480)]: {
      width: 'auto'
    }
  }
})

const SelectCar = ({ classes }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); 
  const cars = useSelector(store => store.cars);

  const [modelValue, setModelValue] = useState(null);
  const [makeValue, setMakeValue] = useState(null);
  const [snackOpen, setSnackOpen] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [showData, setShowData] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [successData, setSuccessData] = useState(null);

  useEffect(() => {
    dispatch(fetchMakes())
  }, [dispatch])

  useEffect(() => {
    setSnackOpen(cars.warning)
  }, [cars.warning, makeValue])

  const handleMakeChange = (e, value) => {
    if(value !== null) {
      dispatch(fetchModels(value))
    }
    setMakeValue(value)
    setModelValue(null)
    setDisabled(true)
  }

  const handleSnackClose = () => {
    setSnackOpen(false)
  }

  const handleModelChange = (e, value) => {
    setModelValue(value)
    if (value === null) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const handleSubmit = () => {
    dispatch(fetchVehicle({ make: makeValue, model: modelValue }))
    setShowData(true);
  }

  const handleConfirm = (data) => {
    setSuccessData(data)
    setShowSuccess(true);
  }

  const handleDashboard = (type) => {
    navigate('/');
  }

  if (showSuccess) {
    return (
      <Box className={classes.success}>
        <Typography variant="h4">
          <FormattedMessage id="select.success.TITLE" />
        </Typography>
        <InfoCard data={successData} showConfirm={false} />
        <Typography variant="h6">
          <FormattedMessage id="select.success.SUPPORT" />
        </Typography>
        <Box className={classes.goBack}>
          <Button variant="contained" onClick={handleDashboard} >
            <FormattedMessage id="select.success.GO_BACK" />
          </Button>
        </Box>
      </Box>
    )
  }

  if (cars.status === 'error') {
    return <ErrorCard />
  }
  return (
    <Box className={classes.container}>
      <Typography variant="h5">
        <FormattedMessage id="select.TITLE" />
      </Typography>
      <Box className={classes.selectWrapper}>
        <Autocomplete
          disablePortal
          id="car-make"
          options={cars.makes}
          classes={{ root: classes.brandAuto }}
          renderInput={(params) => <TextField {...params} label={<FormattedMessage id="select.CHOOSE_BRAND" />} />}
          onChange={handleMakeChange}
          value={makeValue}
        />
        <Autocomplete
          disablePortal
          disabled={cars.models.length === 0}
          id="car-model"
          options={cars.models}
          classes={{ root: classes.modelAuto }}
          renderInput={(params) => <TextField {...params} label={<FormattedMessage id="select.CHOOSE_MODEL" />} />}
          value={modelValue}
          onChange={handleModelChange}
        />
      </Box>
      <Box className={classes.buttonContainer}>
        <Button disabled={disabled} onClick={handleSubmit} variant="contained">
          <FormattedMessage id="select.GET_DETAILS" />
        </Button>
      </Box>
      {showData && <CustomTable onConfirm={handleConfirm} />}
      <CustomSnackBar 
        open={snackOpen}
        onSnackClose={handleSnackClose}
        severity="warning"
        snackMessage={<FormattedMessage id="select.NO_MODEL_AVAILABLE" />}
      />
    </Box>
  )
}

export default withStyles(Styles)(SelectCar);