import { Box, Stack, Grid, Paper } from '@mui/material'

export const MuiLayout = () => {
  return (
    <Paper sx={{ padding: '32px' }} elevation={2}>
      <Stack border='1px solid' spacing={2} direction='row'>
        <Box
          component='span'
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'primary.light'
            }
          }}>
          Codevolution
        </Box>
        <Box
          display='flex'
          height='100px'
          width='100px'
          bgcolor='success.light'
          p={2}></Box>
      </Stack>
      <Grid rowSpacing={2} columnSpacing={1} container my={4}>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor='primary.light'>
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}
