import { createTheme, ThemeProvider, colors } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { LocalizationProvider } from '@mui/lab'
import './App.css'
// import { MuiTable } from './components/MuiTable'
import { MuiCustomTheme } from './components/MuiCustomTheme'

// import { MuiTypography } from './components/MuiTypography'
// import { MuiButton } from './components/MuiButton'
// import { MuiTextField } from './components/MuiTextField'
// import { MuiSelect } from './components/MuiSelect'
// import { MuiRadioButton } from './components/MuiRadioButton'
// import { MuiCheckbox } from './components/MuiCheckbox'
// import { MuiSwitch } from './components/MuiSwitch'
// import { MuiRating } from './components/MuiRating'
// import { MuiAutocomplete } from './components/MuiAutocomplete'
// import { MuiLayout } from './components/MuiLayout'
// import { MuiCard } from './components/MuiCard'
// import { MuiAccordion } from './components/MuiAccordion'
// import { MuiImageList } from './components/MuiImageList'
// import { MuiNavbar } from './components/MuiNavbar'
// import { MuiLink } from './components/MuiLink'
// import { MuiBreadcrumbs } from './components/MuiBreadcrumbs'
// import { MuiDrawer } from './components/MuiDrawer'
// import { MuiTabs } from './components/MuiTabs'
// import { MuiSpeedDial } from './components/MuiSpeedDial'
// import { MuiBottomNavigation } from './components/MuiBottomNavigation'
// import { MuiAvatar } from './components/MuiAvatar'
// import { MuiBadge } from './components/MuiBadge'
// import { MuiList } from './components/MuiList'
// import { MuiChip } from './components/MuiChip'
// import { MuiTooltip } from './components/MuiTooltip'
// import { MuiAlert } from './components/MuiAlert'
// import { MuiSnackbar } from './components/MuiSnackbar'
// import { MuiDialog } from './components/MuiDialog'
// import { MuiSkeleton } from './components/MuiSkeleton'
// import { MuiProgress } from './components/MuiProgress'
// import { MuiLoadingButton } from './components/MuiLoadingButton'
// import { MuiDateTimePicker } from './components/MuiDateTimePicker'
// import { MuiDateRangePicker } from './components/MuiDateRangePicker'
// import { MuiTimeline } from './components/MuiTimeline'
// import { MuiMasonry } from './components/MuiMasonry'

const theme = createTheme({
  status: {
    danger: '#e53e3e'
  },
  palette: {
    secondary: {
      main: colors.orange[500]
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700]
    }
  }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className='App'>
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiTabs /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottomNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiProgress /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiDateTimePicker /> */}
          {/* <MuiDateRangePicker /> */}
          {/* <MuiMasonry /> */}
          {/* <MuiTimeline /> */}
          <MuiCustomTheme />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  )
}

export default App
