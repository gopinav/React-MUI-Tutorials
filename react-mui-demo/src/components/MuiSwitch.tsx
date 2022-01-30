import { Box, FormControlLabel, Switch } from '@mui/material'
import { useState } from 'react'

export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false)
  console.log(checked)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return (
    <Box>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label='Dark mode'
      />
    </Box>
  )
}
