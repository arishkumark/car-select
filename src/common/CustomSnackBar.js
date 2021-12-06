import React from 'react'
import { Box, Snackbar, Alert } from '@mui/material';

const CustomSnackBar = ({open, onSnackClose, severity, snackMessage}) => (
  <Box>
    <Snackbar 
      open={open}
      autoHideDuration={5000}
      onClose={onSnackClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert onClose={onSnackClose} severity={severity} sx={{ width: '100%' }}>
        {snackMessage}
      </Alert>
    </Snackbar>
  </Box>
)

export default CustomSnackBar;
  
