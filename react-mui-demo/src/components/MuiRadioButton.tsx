import { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio
} from '@mui/material'

export const MuiRadioButton = () => {
  const [value, setValue] = useState('')
  console.log(value)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return (
    <Box>
      <FormControl>
        <FormLabel id='job-experience-group-label'>
          Years of experience
        </FormLabel>
        <RadioGroup
          row
          aria-labelledby='job-experience-group-label'
          name='job-experience-group'
          value={value}
          onChange={handleChange}>
          <FormControlLabel
            labelPlacement='start'
            value='0-2'
            control={<Radio size='small' color='secondary' />}
            label='0-2 years'
          />
          <FormControlLabel
            labelPlacement='start'
            value='3-5'
            control={<Radio size='small' color='secondary' />}
            label='3-5 years'
          />
          <FormControlLabel
            labelPlacement='start'
            value='6-10'
            control={<Radio size='small' color='secondary' />}
            label='6-10 years'
          />
        </RadioGroup>
      </FormControl>
    </Box>
  )
}
