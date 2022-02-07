import { Stack, TextField } from '@mui/material'
import { DatePicker, TimePicker, DateTimePicker } from '@mui/lab'
import { useState } from 'react'

export const MuiDateTimePicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)
  const [selectedTime, setSelectedTime] = useState<Date | null>(null)
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(null)

  console.log({
    selectedDate,
    selectedTime: selectedTime && selectedTime.toLocaleTimeString(),
    selectedDateTime
  })
  return (
    <Stack spacing={4} sx={{ width: '250px' }}>
      <DatePicker
        label='Date Picker'
        value={selectedDate}
        onChange={newValue => {
          setSelectedDate(newValue)
        }}
        renderInput={params => <TextField {...params} />}
      />
      <TimePicker
        label='Time Picker'
        value={selectedTime}
        onChange={newValue => {
          setSelectedTime(newValue)
        }}
        renderInput={params => <TextField {...params} />}
      />
      <DateTimePicker
        label='Date Time Picker'
        value={selectedDateTime}
        onChange={newValue => {
          setSelectedDateTime(newValue)
        }}
        renderInput={params => <TextField {...params} />}
      />
    </Stack>
  )
}
