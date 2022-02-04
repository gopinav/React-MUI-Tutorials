import { Tabs, Tab, Box } from '@mui/material'
import { useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite'

type TabPanelProps = {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

export const MuiTabs = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }
  return (
    <Box>
      <Box
        sx={{
          display: 'flex'
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs'
          textColor='secondary'
          indicatorColor='secondary'
          centered
          variant='scrollable'
          scrollButtons='auto'
          orientation='vertical'
          sx={{ borderRight: 1, borderColor: 'divider' }}>
          <Tab label='Tab One' icon={<FavoriteIcon />} id='tab-0' />
          <Tab label='Tab Two' id='tab-1' />
          <Tab label='Tab Three' id='tab-2' disabled />
          <Tab label='Tab Four' id='tab-3' />
          <Tab label='Tab Five' id='tab-4' />
          <Tab label='Ta Five' id='tab-5' />
        </Tabs>
        <TabPanel value={value} index={0}>
          Tab Panel One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Tab Panel Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Tab Panel Three
        </TabPanel>
      </Box>
    </Box>
  )
}
