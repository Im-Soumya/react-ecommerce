import React from 'react'
import { TextField, Grid } from '@mui/material'
import { useFormContext, Controller } from 'react-hook-form'

const CustomTextField = ({ name, label, required }) => {
  const { control } = useFormContext();

  return (
    <Grid xs={12} sm={6}>
      <Controller
        as={TextField}
        control={control}
        fullWidth
        defaultValue=""
        name={name}
        label={label}
        required={required}
      />
    </Grid>
  )
}

export default CustomTextField