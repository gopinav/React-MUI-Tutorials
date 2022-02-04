import { Drawer, Box, Typography, IconButton } from '@mui/material'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu'

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
      <IconButton
        onClick={() => setIsDrawerOpen(true)}
        size='large'
        edge='start'
        color='inherit'
        aria-label='logo'>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='left'
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}>
        <Box p={2} width='250px' role='presentation' textAlign='center'>
          <Typography variant='h6' component='div'>
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  )
}
