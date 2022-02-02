import { Stack, Link, Typography } from '@mui/material'

export const MuiLink = () => {
  return (
    <Stack spacing={2} m={4} direction='row'>
      <Typography variant='h6'>
        <Link href='#'>Link</Link>
      </Typography>
      <Link href='#' color='secondary' underline='hover'>
        Secondary
      </Link>
      <Link href='#' variant='body2' underline='none'>
        Body 2 link
      </Link>
    </Stack>
  )
}
