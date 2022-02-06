import { Stack, CircularProgress, LinearProgress } from '@mui/material'
export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      <CircularProgress />
      <CircularProgress color='success' />
      <CircularProgress variant='determinate' value={60} />
      <LinearProgress />
      <LinearProgress color='success' />
      <LinearProgress variant='determinate' value={60} />
    </Stack>
  )
}
